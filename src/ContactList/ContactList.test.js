import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ContactList from './ContactList';

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<ContactList />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});