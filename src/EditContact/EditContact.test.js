import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import EditContact from "./EditContact";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<EditContact fullname={"Sean"} phone_number={"2223334444"} />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
