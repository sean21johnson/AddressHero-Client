import React, { Component } from "react";
import "./ContactBar.css";
import ApiContext from "../ApiContext";

/*
The ContactBar component contains a button to add a new contact and a search bar to search within a user's
list of contacts. When the 'add new contact' button is clicked, the user will be displayed a form to add a new 
contact and a POST request will be submitted upon completion. When a user types a name into the search bar,
a search query parameter is sent with a GET request to the server which sends back a list of contact names that
meet the search criteria.
*/
class ContactBar extends Component {
	static contextType = ApiContext;

	render() {
		const {
			searchText,
			handleSearchChange,
			handleSearchChoice,
			addButtonClicked,
		} = this.props;

		return (
			<div className="ContactBar">
				<input
					className="Search_Contacts"
					type="text"
					value={searchText}
					onChange={handleSearchChange}
					onKeyUp={handleSearchChoice}
					placeholder="Search for Contact"
				/>
				<button className="ContactBar_Button" onClick={addButtonClicked}>
					Add Contact
				</button>
			</div>
		);
	}
}

export default ContactBar;
