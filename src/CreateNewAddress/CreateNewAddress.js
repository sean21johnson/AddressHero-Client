import React, { Component } from 'react';
import './CreateNewAddress.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ApiContext from '../ApiContext';
import config from './../config';
import TokenService from './../services/TokenServices';

class CreateNewAddress extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    static contextType = ApiContext;

    handleSubmit = (event) => {
        event.preventDefault();
        const { contact_name, address_street, address_city, address_state, address_zip, address_map, phone_number } = event.target;
        let newAddress = {
            contact_name: contact_name.value,
            address_street: address_street.value,
            address_city: address_city.value,
            address_state: address_state.value,
            address_zip: address_zip.value,
            address_map: address_map.value,
            phone_number: phone_number.value
        }
        fetch(`${config.HERO_API_ENDPOINT}/api/addresses`, {
            method: "POSTS",
            body: JSON.stringify(newAddress),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then((e) => Promise.reject(e))
            }
        })
        .then((address) => {
            this.context.handleAddAddress(address);
            this.props.history.push('/addresses')
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/addresses')
    }

    render() {
		return (
			<>
				<Header></Header>
				<section className="Create_NewAddress">
					<h2 className="Create_NewAddress_Header">Add New Contact</h2>
					<form className="Create_NewAddress_Form" onSubmit={this.handleSubmit}>
						<div className="Contact_Name_Div">
							<label className="Contact_Name_Class" htmlFor="contact_name">
								Contact Name
							</label>
							<input
								type="text"
								name="contact_name"
								id="contact_name"
                                placeholder="LeBron James"
								required
							></input>
						</div>
						<div className="Address_Street_Div">
							<label className="Address_Street_Class" htmlFor="address_street">
								Street Address
							</label>
							<input
								type="text"
								name="address_street"
								id="address_street"
								placeholder="1111 S Figueroa St"
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
								placeholder="Los Angeles"
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
								placeholder="90015"
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
								placeholder="90015"
								required
							></input>
						</div>

                        <div className="Contact_Phone_Div">
							<label className="Contact_Phone_Class" htmlFor="phone_number">
								Phone Number
							</label>
							<input
								type="text"
								name="phone_number"
								id="phone_number"
								placeholder="555-555-5555"
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

				</section>
				<Footer></Footer>
			</>
		);
	}
}
 
export default CreateNewAddress;