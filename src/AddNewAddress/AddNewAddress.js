import React, { Component } from "react";
import "./AddNewAddress.css";

/*
The AddNewAddress component is a form where the user can add an address for a given contact. It needs the addNewAddress
function sent in as a prop. When the user submits this form, the function is called and sends a post request to the server
to post the new address in the database. Street, city, state, zip, and google maps link are all required for form submission.
*/
class AddNewAddress extends Component {
	render() {
		const { contact, addNewAddress, handleAddAddressClickCancel } = this.props;

		return (
			<>
				<div className="AddAddress_Div">
					{contact !== null ? (
						<h2 className="AddAddress_Header">
							Add Address for {contact.fullname.split(" ")[0]}:
						</h2>
					) : (
						""
					)}
					<form className="Create_NewAddress_Form" onSubmit={addNewAddress}>
						<div className="Address_Street_Div">
							<label className="Address_Street_Class" htmlFor="address_street">
								Street:
							</label>
							<input
								className="AddAddress_Input"
								type="text"
								name="address_street"
								id="address_street"
								required
							></input>
						</div>
						<div className="Address_City_Div">
							<label className="Address_City_Class" htmlFor="address_city">
								City:
							</label>
							<input
								className="AddAddress_Input"
								type="text"
								name="address_city"
								id="address_city"
								required
							></input>
						</div>
						<div className="Address_State_Div">
							<label className="Address_State_Class" htmlFor="address_state">
								State:
							</label>
							<select
								className="AddAddress_Input"
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
								Zip Code:
							</label>
							<input
								className="AddAddress_Input"
								type="text"
								name="address_zip"
								id="address_zip"
								required
							></input>
						</div>
						<div className="Address_Map_Div">
							<label className="Address_Map_Class" htmlFor="address_map">
								Google Maps Link:
							</label>
							<input
								className="AddAddress_Input"
								type="text"
								name="address_map"
								id="address_map"
								required
							></input>
						</div>
						<div className="Add_NewAddress_Buttons">
							<button
								className="AddAddress_Cancel_Button"
								type="button"
								onClick={handleAddAddressClickCancel}
							>
								Cancel
							</button>
							<button className="AddAddress_Submit_Button" type="submit">
								Save
							</button>
						</div>
					</form>
				</div>
			</>
		);
	}
}

export default AddNewAddress;
