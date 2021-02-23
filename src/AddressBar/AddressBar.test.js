import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddressBar from './AddressBar';

it("renders without crashing", () => {
	const div = document.createElement("div");

	ReactDOM.render(
		<BrowserRouter>
			<AddressBar 
            contactAddresses = {
                ["Address"]
            }
            />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});