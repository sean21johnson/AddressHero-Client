import React, { Component } from "react";
import ApiContext from "../ApiContext";
import { Link } from "react-router-dom";
import "./TimelineItem.css";

class TimelineItem extends Component {
	static contextType = ApiContext;

	handleDateFormat = (postDate) => {
		postDate.substring(0, 10);
		let year = postDate.substring(0, 4);
		let month = postDate.substring(5, 7);
		let day = postDate.substring(8, 10);

		return (postDate = `${month}-${day}-${year}`);
	};

	render() {
		const {
			city,
			date_created,
			event_type,
			fullname,
			street,
			us_state,
			zip,
			picture,
			id,
		} = this.props;

		return (
			<>
				<li className="Timeline_Item_ListItem">
					<div className="Timeline_Item_Div">
						<div className="Timeline_Image_Div">
							<Link to={`/contacts/${id}`}>
								<img
									className="Timeline_Image"
									src={picture}
									alt="Timeline_Picture"
								></img>
							</Link>
						</div>
						<div className="Timeline_Details_Div">
							<div className="Timeline_Details_DateName">
								{`${this.handleDateFormat(
									date_created
								)}: ${event_type} Card sent to `}
								<strong className="Extra_Bold">{fullname}</strong>
							</div>
							<div className="Timeline_Details_Address">
								{`@ ${street}, ${city}, ${us_state} ${zip}`}
							</div>
						</div>
					</div>
				</li>
			</>
		);
	}
}

export default TimelineItem;
