import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddressList from "./AddressList";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<AddressList contactAddresses={["Address"]} />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
