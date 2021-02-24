import React, { Component } from "react";
import "./AddressItem.css";

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
