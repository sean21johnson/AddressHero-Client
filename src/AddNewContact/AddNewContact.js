import React, { Component } from "react";
import "./AddNewContact.css";

class AddNewContact extends Component {
	render() {
		const { addContact, addCancelClicked } = this.props;
		return (
			<section className="AddNewContact">
				<h3 className="NewContact_Header">Add New Contact</h3>
				<form onSubmit={addContact}>
					<div className="NewContact_Container">
						<label className="NewContact_Label" htmlFor="contact_name">
							Full Name:
						</label>
						<input
							className="NewContact_Input"
							type="text"
							name="contact_name"
							id="contact_name"
							required
						></input>
					</div>
					<div className="NewContact_Container">
						<label className="NewContact_Label" htmlFor="contact_phone">
							Phone Number:
						</label>
						<input
							className="NewContact_Input"
							type="text"
							name="contact_phone"
							id="contact_phone"
							required
						></input>
					</div>
					<div className="NewContact_Container">
						<label className="NewContact_Label" htmlFor="contact_picture">
							Picture:
						</label>
						<input
							className="NewContact_Input"
							type="text"
							name="contact_picture"
							id="contact_picture"
							required
						></input>
					</div>
					<div className="NewContact_Container_Buttons">
						<div className="NewContact_Cancel">
							<button
								className="NewContact_Button"
								type="button"
								onClick={addCancelClicked}
							>
								Cancel
							</button>
						</div>
						<div>
							<button className="NewContact_Button" type="submit">
								Create Profile
							</button>
						</div>
					</div>
				</form>
			</section>
		);
	}
}

export default AddNewContact;
