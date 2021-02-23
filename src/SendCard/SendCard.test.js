import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SendCard from './SendCard';

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<SendCard 
                contact = {
                   {fullname: "Sean Johnson"} 
                }
                contactAddresses = {
                    ["Address"]
                }
            />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});