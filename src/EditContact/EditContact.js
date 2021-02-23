import React, { Component } from 'react';
import './EditContact.css'
import TokenService from './../services/TokenServices';
import config from './../config';
import ApiContext from '../ApiContext';

class EditContact extends Component {

    static contextType = ApiContext;
    
    editContact = (event) => {
        event.preventDefault()
        const { contact_name, contact_phone, contact_picture } = event.target;
        const { id } = this.props;
        let editContact = {
            fullname: contact_name.value,
            phone_number: contact_phone.value,
            picture: contact_picture.value
        }
        fetch(`${config.HERO_API_ENDPOINT}/api/contacts/${id}`, {
            method: "PATCH",
            body: JSON.stringify(editContact),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then((e) => Promise.reject(e))
            }
            return response.json()
        })
        .then(() => {
            this.context.getAllContacts();
            this.props.handleClickCancel();
        })
    }

    formatPhoneNumber = (number) => {
        let firstThree = number.substring(0, 3);
        let nextThree = number.substring(3, 6)
        let lastFour = number.substring(6, 10)

        return `(${firstThree}) ${nextThree}-${lastFour}`;
    }

    render() {     

        const {picture, fullname, phone_number, handleClickCancel} = this.props

        return ( 
            <>
            <section className="EditContact">
                <h3 className="EditContact_Header">Edit {`${fullname.split(" ")[0]}'s`} Contact Info</h3>
                <form onSubmit={this.editContact}>
                    <div className="NewContact_Container">
                        <label className="EditContact_Label" htmlFor="contact_name">
                            Full Name:
                        </label>
                        <input
                            className="EditContact_Input"
                            type="text"
                            name="contact_name"
                            id="contact_name"
                            placeholder={fullname}
                            required
                        >   
                        </input>
                    </div>
                    <div className="NewContact_Container">
                        <label className="EditContact_Label" htmlFor="contact_phone">
                            Phone Number:
                        </label>
                        <input
                            className="EditContact_Input"
                            type="text"
                            name="contact_phone"
                            id="contact_phone"
                            placeholder={this.formatPhoneNumber(phone_number)}
                            required
                        >
                        </input>
                    </div>
                    <div className="NewContact_Container">
                        <label className="EditContact_Label" htmlFor="contact_picture">
                            Picture:
                        </label>
                        <input
                            className="EditContact_Input"
                            type="text"
                            name="contact_picture"
                            id="contact_picture"
                            placeholder={picture}
                            required
                        >
                        </input>
                    </div>
                        <div className="EditContact_Container_Buttons">
                            <div className="NewContact_Cancel">
                                <button className="EditContact_Button" type="button" onClick={handleClickCancel}>Cancel</button>
                            </div>
                            <div>
                                <button className="EditContact_Button" type="submit">Submit</button>
                            </div>
                        </div>
                </form>
        </section>
        </>
         );
    }
}
 
export default EditContact;