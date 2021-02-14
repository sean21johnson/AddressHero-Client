import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import './AddressItem.css';
import config from './../config';
import EditAddress from './../EditAddress/EditAddress';

class AddressItem extends Component {
    static defaultProps = {
        handleDeleteAddress: () => {}
    }

    static contextType = ApiContext;

    handleClickDelete = (event) => {
        event.preventDefault();
        const id = this.props.contact_id;

        fetch(`${config.HERO_API_ENDPOINT}/api/addresses/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        .then((response) => {
            if (!response.ok) {
                return response.json((error) => Promise.reject(error))
            }
        })
        .then(() => {
            this.context.handleDeleteAddress(id);
        })
        .catch((error) => {
            console.error({ error })
        })
    }

    handleClickEdit = () => {
        if (this.context.addressId !== this.props.id) {
            this.context.addressId = this.props.id;
            this.context.handleUpdateAddressId(this.context.addressId)
        }
        this.context.handleUpdateAddressId(this.props.id)
    }

    handleUpdateStateIndex = () => {
        if (this.context.indexOfAddress !== this.props.index) {
            this.context.indexOfAddress = this.props.index;
            this.context.handleUpdateStateIndex(this.context.indexOfAddress)
        }
        else {
            this.context.handleUpdateStateIndex(null)
        }
    }

    render() { 

            const { contact_name, address_city, address_zip, address_state, address_street, address_map } = this.props

            return (
                <div className="Address_Container_Item">
                    <li className="Address_Item">
                        <div className="Showing_Section" onClick={this.handleUpdateStateIndex}>
                            <h4 className="Contact_Name">{contact_name}</h4>
                            
                        </div>
    
                        {this.props.index === this.context.indexOfAddress && (
                            <div className="Additional_Details">
                                <p className="Adddress_Street_City_State_Zip">{`${address_street}, ${address_city}, ${address_state} ${address_zip}`}</p>
                                <div>
                                    <iframe className="Address_Map" src={address_map}></iframe>
                                </div>
                                <div className="Address_Buttons">
                                    <button
                                        className="Address_Delete"
                                        type="button"
                                        onClick={this.handleClickDelete}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="Address_Edit"
                                        type="button"
                                        onClick={this.handleClickEdit}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )} 
    
                        {this.props.id === this.context.addressId && (
                            <div>
                                <EditAddress
                                    id={this.props.id}
                                    name={this.props.meal_name}
                                    description={this.props.meal_description}
                                    url={this.props.meal_image}
                                    category={this.props.meal_category}
                                ></EditAddress>
                            </div>
                        )}
                    </li>
                </div>
            );
        }
}
 
export default AddressItem;