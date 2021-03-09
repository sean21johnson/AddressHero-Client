import React, { Component } from "react";
import "./AddressItem.css";

/*
The AddressItem component just displays a given address. It will show the google maps link to the address, the full address
of the location, and a button which gives the user the option to delete the address. On click of the button, a DELETE request
will be sent to the server to delete that specific address from the database.
*/
class AddressItem extends Component {
	handleDeleteAddress = (event, id) => {
		event.preventDefault();
		this.props.deleteAddress(id);
	};

	render() {
		const { contactAddress, deleteAddress } = this.props;
		return (
			<>
				<li className="AddressItem_Box">
					<div className="AddressItem_AddressLine">
						<p>{`${contactAddress.street}, ${contactAddress.city}, ${contactAddress.us_state} ${contactAddress.zip}`}</p>
					</div>
					<div className="AddressItem_Map">
						<iframe
							className="AddressMap_Border"
							src={contactAddress.map}
						></iframe>
					</div>
					<div>
						<form onSubmit={() => deleteAddress(contactAddress.id)}>
							<button type="submit" className="AddressItem_Button">
								Delete Address
							</button>
						</form>
					</div>
				</li>
			</>
		);
	}
}

export default AddressItem;
