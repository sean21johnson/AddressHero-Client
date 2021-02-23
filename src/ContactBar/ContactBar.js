import React, { Component } from 'react';
import './ContactBar.css';
import ApiContext from '../ApiContext'

class ContactBar extends Component {

    static contextType = ApiContext
  
	render() {

		const {searchText, handleSearchChange, handleSearchChoice, addButtonClicked} = this.props

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
                <button className="ContactBar_Button" onClick={addButtonClicked}>Add Contact</button>
			</div>
		);
	}
}
 
export default ContactBar;