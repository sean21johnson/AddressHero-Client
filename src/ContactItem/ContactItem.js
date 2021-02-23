import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import { Link } from "react-router-dom";
import './ContactItem.css';
import config from '../config';
import EditContact from './../EditContact/EditContact';
import TokenService from './../services/TokenServices';

class ContactItem extends Component {
    state = {
        editClicked: false
    }

    static contextType = ApiContext;

    deleteContact = (event) => {
        event.preventDefault();
        Promise.all([
            fetch(`${config.HERO_API_ENDPOINT}/api/contacts/${this.props.id}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${TokenService.getAuthToken()}`,
                    "content-type": "application/json"
                },

            })
          ])
            .then(([response]) => {
              if (!response.ok) return response.json().then((e) => Promise.reject(e));
            })
            .then(() => {
                this.context.getAllContacts();
                this.props.reDirect();
            })
            .catch((error) => {
              console.error(error)
            })
    }

    formatPhoneNumber = (number) => {
        let firstThree = number.substring(0, 3);
        let nextThree = number.substring(3, 6)
        let lastFour = number.substring(6, 10)

        return `(${firstThree}) ${nextThree}-${lastFour}`;
    }

    handleEditClick = () => {
        this.setState({
            editClicked: true
        })
    }

    handleClickCancel = () => {
        this.setState({
            editClicked: false
        })
    }

    render() {
        const {picture, fullname, id, phone_number} = this.props;
        const {editClicked} = this.state;
        const {handleProfileButtonViewToFalse, profileButtonView} = this.context;

        return ( 
        <>
            <div className="ContactItem_Mini">
                <li className="Contact_Items">
                    <div className="Contact_Image_Div">
                        <img className="Contact_Image" src={picture} alt="profile pic"></img>
                    </div>
                    <div className="Contact_Details_Div">
                        <div className="Contact_Name_Container">
                            <div className="Contact_Name_Title">
                            Name: 
                            </div>
                            <div className="Contact_Name_Name">
                            {fullname}
                            </div>
                        </div>
                        <div className="Contact_Name_Number">
                            <div className="Contact_Name_Phone">
                            Phone Number: 
                            </div>
                            <div className="Contact_Name_TheNumber">
                            {this.formatPhoneNumber(phone_number)}
                            </div>
                        </div>

                        {profileButtonView === true ? (
                        
                        <div className="Contact_Name_Button">
                            <Link
                                to={`/contacts/${id}`}
                            
                            >
                            <button onClick={handleProfileButtonViewToFalse} className="Contact_Profile_Button">View Profile</button>
                            </Link>
                            <button onClick={this.handleEditClick} className="Edit_Contact_Button">Edit</button>
                        </div>

                        ) : 
                        <div className="Contact_Delete">
                            <form onSubmit={this.deleteContact}>
                                <button type="submit" className="Contact_Delete_Button">Delete Contact</button>
                            </form>
                        </div>
                        
                        }
                            
                            
                    </div>
                </li>
                {editClicked === true ? (
                    <EditContact
                        picture={picture}
                        fullname={fullname}
                        phone_number={phone_number}
                        id={id}
                        handleClickCancel={this.handleClickCancel}
                        formatPhoneNumber={this.formatPhoneNumber}
                    />
                ) : ""}
            </div>
        </>
        )
        }
}
 
export default ContactItem;