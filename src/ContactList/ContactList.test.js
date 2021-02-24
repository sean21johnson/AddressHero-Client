import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ContactList from './ContactList';
import ApiContext from '../ApiContext';

it("renders without crashing", () => {
	const div = document.createElement("div");

	ReactDOM.render(
		<ApiContext.Provider
			value = {
				{contacts: [],
				handleProfileButtonViewToTrue: () => {}	
			}
		}>
			<BrowserRouter>
				<ContactList
				/>
			</BrowserRouter>
		</ApiContext.Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});