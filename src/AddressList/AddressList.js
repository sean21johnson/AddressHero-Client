import React, { Component } from 'react';
import AddressItem from './../AddressItem/AddressItem';
import './AddressList.css'

class AddressList extends Component {

    render() { 

        const { contactAddresses, contact, deleteAddress} = this.props;

        return ( 
            <>
            		<h3 className="Table_Header">
						{contactAddresses.length > 1 ? "List of Addresses" : "Current Address"}
					</h3>
					<div className="ContactList_List">
						<ul className="ContactList_Unordered">
						{contact ? contactAddresses.map((contactAddress, index) => (
							<AddressItem
								contactAddress={contactAddress}
								index={index}
								key={index}
								deleteAddress={deleteAddress}
							/>
						)) : null}
						</ul>
					</div>
            </>
         );
    }
}
 
export default AddressList;