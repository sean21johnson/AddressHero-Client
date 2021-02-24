import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddNewAddress from "./AddNewAddress";

it("renders without crashing", () => {
	const div = document.createElement("div");

	ReactDOM.render(
		<BrowserRouter>
			<AddNewAddress contact={{ fullname: "Sean Johnson" }} />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
