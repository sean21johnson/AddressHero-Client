import React, { Component } from 'react';
import './SendCard.css'

class SendCard extends Component {

    render() { 

        const {contact, contactAddresses, addTimelinePost, handleSendCardClickCancel} = this.props;

        return ( 
        <>
            {contactAddresses !== "[]" ? (
                <div className="SendCard_Div">
                    {contact !== null ? (
                        <h2 className="SendCard_Header">Send {contact.fullname.split(" ")[0]} a Card:</h2>
                    ) : (
                        ""
                    )}
                    <form onSubmit={addTimelinePost}>
                        <div className="SendCard_Item_Div">
                            <label className="SendCard_Class" htmlFor="card_address">Address:</label>
                            <select className="SendCard_Input" name="card_address" required>
                                {contactAddresses.map((address, index) => (
                                    <option key={index} value={address.id}>
                                        {address.street}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="SendCard_Item_Div">
                            <label className="SendCard_Class" htmlFor="card_type">
                                Card Type:</label>
                                <select className="SendCard_Input" name="card_type" required>
                                    <option value="Christmas">Christmas</option>
                                    <option value="Birthday">Happy Birthday</option>
                                    <option value="Health">Get Well Soon</option>
                                    <option value="Anniversary">Happy Anniverary</option>
                                </select>

                        </div>

                        <div className="Add_NewCard_Buttons">
                            <button
                                className="Add_Cancel_Button"
                                type="button"
                                onClick={handleSendCardClickCancel}
                            >
                                Cancel
                            </button>
                            <button className="Add_Submit_Button" type="submit">
                                Send Card
                            </button>
                        </div>
                    </form>
                </div>
            ) : 
                ""
            }
        </>
        )}
}
 
export default SendCard;