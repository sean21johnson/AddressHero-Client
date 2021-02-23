import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddNewContact from './AddNewContact';

it("renders without crashing", () => {
	const div = document.createElement("div");

	ReactDOM.render(
		<BrowserRouter>
			<AddNewContact />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});