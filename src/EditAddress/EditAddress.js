import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import './EditAddress.css';
import config from './../config';

class EditAddress extends Component {
    static contextType = ApiContext;


    handleEditSubmit = event => {
        event.preventDefault();
        const { edit_contact_name, edit_address_street, edit_address_city, edit_address_state, edit_address_zip, edit_address_map, edit_contact_phone } = event.target;
        let editedContact = {
            address_id: this.props.id,
            contact_name: edit_contact_name.value,
            address_street: edit_address_street.value,
            address_city: edit_address_city.value,
            address_state: edit_address_state.value,
            address_zip: edit_address_zip.value,
            address_map: edit_address_map.value,
            address_phone: edit_contact_phone.value
        }
        fetch(`${config.HERO_API_ENDPOINT}/api/addresses`, {
            method: "PATCH",
            body: JSON.stringify(editedContact),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((e) => Promise.reject(e))
            }
            return response.json()
        })
        .then((address) => {
            this.context.handleUpdateAddress()
        })

    }

    handleClickCancelEdit = (id) => {
        this.context.handleUpdateAddressId(id);
    }

	render() {
		return (
			<div className="Edit_Address">
				<form className="Edit_Address_form" onSubmit={this.handleEditSubmit}>
					<div className="Edit_Address_Section">
						<label htmlFor="edit_contact_name"></label>
						<input
							className="Edit_Contact_Class"
							type="text"
							name="edit_contact_name"
							id="edit_contact_name"
							placeholder={this.props.name}
							required
						></input>
					</div>
					<div className="Edit_Street_Section">
						<label htmlFor="edit_address_street"></label>
						<input
							className="Edit_Address_Class"
							type="text"
							name="edit_address_street"
							id="edit_address_street"
							placeholder={this.props.name}
							required
						></input>
					</div>

					<div className="Edit_City_Section">
						<label htmlFor="edit_address_city"></label>
						<input
							className="Edit_City_Class"
							type="text"
							name="edit_address_city"
							id="edit_address_city"
							placeholder={this.props.name}
							required
						></input>
					</div>


					<div className="Edit_State_Section">
						<label htmlFor="edit_address_state"></label>
                        <select
								className="Edit_State_Dropdown"
								name="edit_address_state"
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

					<div className="Edit_Zip_Section">
						<label htmlFor="edit_address_zip"></label>
						<textarea
							className="Edit_Address_Zip"
							type="text"
							name="edit_address_zip"
							id="edit_address_zip"
							placeholder={this.props.description}
							required
						></textarea>
					</div>

                    <div className="Edit_Map_Section">
						<label htmlFor="edit_address_map"></label>
						<textarea
							className="Edit_Address_Map"
							type="text"
							name="edit_address_map"
							id="edit_address_map"
							placeholder={this.props.description}
							required
						></textarea>
					</div>

                    <div className="Edit_Phone_Section">
						<label htmlFor="edit_contact_phone"></label>
						<textarea
							className="Edit_Contact_Phone"
							type="text"
							name="edit_contact_phone"
							id="edit_contact_phone"
							placeholder={this.props.description}
							required
						></textarea>
					</div>

					<div className="Edit_Address_Buttons">
						<button
							className="Edit_Delete_Button"
							type="button"
							onClick={this.handleClickCancelEdit}
						>
							Cancel
						</button>
						<button className="Edit_Save_Button" type="submit">
							Save
						</button>
					</div>
				</form>
			</div>
		);
    }
}
 
export default EditAddress;