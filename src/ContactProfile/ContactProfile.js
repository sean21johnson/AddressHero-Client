import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import TokenService from "./../services/TokenServices";
import { withRouter } from "react-router";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

class ContactProfile extends Component {
	state = {
		contact: null,
		contactAddresses: [],
	};

	static contextType = ApiContext;

	getContactProfile = (contact_id) => {
		Promise.all([
			fetch(`${config.HERO_API_ENDPOINT}/api/contacts/${contact_id}`, {
				headers: {
					authorization: `bearer ${TokenService.getAuthToken()}`,
				},
			}),
		])
			.then(([response]) => {
				if (!response.ok) return response.json().then((e) => Promise.reject(e));
				return Promise.all([response.json()]);
			})
			.then(([contact]) => {
				this.setState({
					contact,
				});
			})
			.catch((error) => {
				console.error('User Profile Not Available');
			});
	};

	getContactAddresses = (contact_id) => {
		Promise.all([
			fetch(
				`${config.HERO_API_ENDPOINT}/api/contacts/${contact_id}/addresses`,
				{
					headers: {
						authorization: `bearer ${TokenService.getAuthToken()}`,
					},
				}
			),
		])
			.then(([response]) => {
				if (!response.ok) return response.json().then((e) => Promise.reject(e));
				return Promise.all([response.json()]);
			})
			.then(([contactAddresses]) => {
				this.setState({
					contactAddresses,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

	deleteAddress = (id) => {
		fetch(
			`${config.HERO_API_ENDPOINT}/api/contacts/${this.state.contact.id}/addresses`,
			{
				method: "DELETE",
				headers: {
					authorization: `bearer ${TokenService.getAuthToken()}`,
					"content-type": "application/json",
				},
				body: JSON.stringify({ id: id }),
			}
		)
			.then((res) => {
				if (!res.ok) return res.json.then((e) => Promise.reject(e));
			})
			.then(() => {
				this.setState({
					contactAddresses: this.state.contactAddresses.filter(
						(address) => address.id !== id
					),
				});
			});
	};

  addNewAddress = (event) => {
    event.preventDefault();
    const {address_street, address_city, address_state, address_zip, address_map} = event.target;
    let newAddress = {
      street: address_street.value,
      city: address_city.value,
      us_state: address_state.value,
      zip: address_zip.value,
      map: address_map.value
    }
    fetch(`${config.HERO_API_ENDPOINT}/api/contacts/${this.state.contact.id}/addresses`, {
      method: "POST",
      body: JSON.stringify(newAddress),
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
          return response.json().then((e) => Promise.reject(e))
      }
      return response.json();
    })
    .then((address) => {
      this.setState({
        contactAddresses: [...this.state.contactAddresses, address]
      })
    })
  }

  addTimelinePost = (event) => {
    event.preventDefault();
    const { card_address, card_type } = event.target
    let newTimelinePost = {
      event_type: card_type.value,
      address_id: card_address.value
    }
    fetch(`${config.HERO_API_ENDPOINT}/api/contacts/${this.state.contact.id}/cardType`, {
      method: "POST",
      body: JSON.stringify(newTimelinePost),
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
          return response.json().then((e) => Promise.reject(e))
      }
      return response.json();
    })
    .then((newPost) => {
      this.context.handleAddToTimeline(newPost);
    })
  }

	componentDidMount() {
		let contact_id = this.props.match.params.id;
		this.getContactProfile(contact_id);
		this.getContactAddresses(contact_id);
	}

	//contacts/:id/addresses should return an array of all the addresses
	//array of all contact addresses returned

	//Api should create an address and delete an address, maybe edit an address

	//contact/:id/sendCard will put a card in my timeline table

	render() {
		return (
			<>
				<Header></Header>
				<div>
					<h2>{this.state.contact ? this.state.contact.fullname : ""}</h2>
					<p>
						<strong>Phone Number: </strong>{" "}
						{this.state.contact ? this.state.contact.phone_number : ""}{" "}
					</p>


					<h3>
						{this.state.contactAddresses.length > 1 ? "Addresses:" : "Address"}
					</h3>

					<table>
						<tbody>
							<tr>
								<th>Street</th>
								<th>City</th>
								<th>State</th>
								<th>Zip</th>
								<th>Map</th>
								<th></th>
							</tr>
							{this.state.contact
								? this.state.contactAddresses.map((contactAddress, index) => (
										<tr key={index}>
											<td>{contactAddress.street}</td>
											<td>{contactAddress.city}</td>
											<td>{contactAddress.us_state}</td>
											<td>{contactAddress.zip}</td>
											<td>
												<iframe src={contactAddress.map}></iframe>
											</td>
											<td>
												<div>
													<button
														onClick={() =>
															this.deleteAddress(contactAddress.id)
														}
													>
														Delete Address
													</button>
												</div>
											</td>
										</tr>
								  ))
								: null}
						</tbody>
					</table>
          </div>


          <div>
            {this.state.contact !== null ? <h2>Add New Address for {this.state.contact.fullname.split(" ")[0]}:</h2> : ''}
					<form className="Create_NewAddress_Form" onSubmit={this.addNewAddress}>
						<div className="Address_Street_Div">
							<label className="Address_Street_Class" htmlFor="address_street">
								Street Address
							</label>
							<input
								type="text"
								name="address_street"
								id="address_street"
								required
							></input>
						</div>
						<div className="Address_City_Div">
							<label className="Address_City_Class" htmlFor="address_city">
								City
							</label>
							<input
								type="text"
								name="address_city"
								id="address_city"
								required
							></input>
						</div>
						<div className="Address_State_Div">
							<label className="Address_State_Class" htmlFor="address_state">
								State
							</label>
							<select
								className="Address_State_Dropdown"
								name="address_state"
								required
							>

                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>	
						</div>
						<div className="Address_Zip_Div">
							<label className="Address_Zip_Class" htmlFor="address_zip">
								Zip Code
							</label>
							<input
								type="text"
								name="address_zip"
								id="address_zip"
								required
							></input>
						</div>
              <div className="Address_Map_Div">
							<label className="Address_Map_Class" htmlFor="address_map">
								Google Maps Link
							</label>
							<input
								type="text"
								name="address_map"
								id="address_map"
								required
							></input>
						</div>
						<div className="Create_NewAddress_buttons">
							<button
								className="Create_Cancel_Button"
								type="button"
								onClick={this.handleClickCancel}
							>
								Cancel
							</button>
							<button className="Create_Submit_Button" type="submit">
								Save
							</button>
						</div>
					</form>
          </div>
          
          {this.state.contactAddresses !== "[]" ? (

          <div>
          {this.state.contact !== null ? <h2>Send {this.state.contact.fullname.split(" ")[0]} a Card:</h2> : ''}
          <form onSubmit={this.addTimelinePost}>
            <div>
              <label htmlFor="card_address">
                Address:
              </label>
              <select
                name="card_address"
                required
              >
                {this.state.contactAddresses.map((address, index) => 
                  <option key={index} value={address.id}>{address.street}, {address.city}, {address.us_state} {address.zip}</option>
                )}

              </select>
            </div>
            <div>
              <label htmlFor="card_type">
                Card Type:
                  <select
                    name="card_type"
                    required
                  >
                    <option value="Christmas">Christmas Card</option>
                    <option value="Birthday">Happy Birthday Card</option>
                    <option value="Health">Get Well Soon Card</option>
                    <option value="Anniversary">Happy Anniverary Card</option>
                    
                  </select>
              </label>
            </div>

						<div className="Add_NewCard_buttons">
							<button
								className="Add_Cancel_Button"
								type="button"
								onClick={this.handleClickCancel}
							>
								Cancel
							</button>
							<button className="Add_Submit_Button" type="submit">
								Send Card
							</button>
						</div>
          </form>
          </div>
    ) : ""}
          
				<Footer></Footer>
			</>
		);
	}
}

export default withRouter(ContactProfile);
