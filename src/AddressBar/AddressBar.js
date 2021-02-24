import React, { Component } from "react";
import "./AddressBar.css";

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
