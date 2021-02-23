import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddressItem from './AddressItem';

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<AddressItem 
                contactAddress = {
                    {street: "22 Periwinkle Lane"},
                    {city: "Manhattan"},
                    {us_state: "New York"},
                    {zip: "10009"},
                    {map: "map"}
                }
            />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});