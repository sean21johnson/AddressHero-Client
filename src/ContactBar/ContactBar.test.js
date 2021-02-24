import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ContactBar from "./ContactBar";

it("renders without crashing", () => {
	const div = document.createElement("div");

	ReactDOM.render(
		<BrowserRouter>
			<ContactBar />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
