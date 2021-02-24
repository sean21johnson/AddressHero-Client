import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TimelineItem from "./TimelineItem";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<TimelineItem date_created={"11/24/2020"} />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
