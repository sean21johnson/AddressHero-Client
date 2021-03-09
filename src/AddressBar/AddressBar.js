import React, { Component } from "react";
import "./AddressBar.css";

/*
The AddressBar component is contains two buttons and is shown on a contact's profile page. The two buttons are to add a
new address for that contact or to send a card to that contact. When you click on the buttons, forms
will be displayed on the contact's page to complete either of these actions.
*/
class AddressBar extends Component {
	render() {
		const {
			handleAddAddressButtonClicked,
			handleSendCardButtonClicked,
			contactAddresses,
		} = this.props;

		return (
			<>
				<div className="AddressBar">
					<div>
						<button
							className="AddressBar_NewContact_Button"
							onClick={handleAddAddressButtonClicked}
						>
							Add New Address
						</button>
					</div>

					{contactAddresses.length >= 1 ? (
						<div>
							<button
								className="AddressBar_SendCard_Button"
								onClick={handleSendCardButtonClicked}
							>
								Send Card
							</button>
						</div>
					) : (
						""
					)}
				</div>
			</>
		);
	}
}

export default AddressBar;
