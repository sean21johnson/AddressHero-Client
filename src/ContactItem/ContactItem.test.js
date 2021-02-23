import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ContactItem from './ContactItem';

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<ContactItem
                phone_number = {
                    "5554446666"
                }
            />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
