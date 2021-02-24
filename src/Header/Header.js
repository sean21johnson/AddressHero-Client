import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import "./Header.css";
import TokenService from "./../services/TokenServices";

class Header extends Component {
	static contextType = ApiContext;

	handleHeroClick = () => {
		this.context.getAllContacts();
	};

	handleTimelineClick = () => {
		this.context.getTimeline();
	};

	handleLogoutClick = () => {
		TokenService.clearAuthToken();
	};

	renderLoginLink() {
		return (
			<header className="header">
				<nav className="nav_bar">
					<div className="nav_left">
						<div className="nav_logo">
							<Link
								className="address_logo"
								to="/contacts"
								onClick={this.handleHeroClick}
							>
								<FontAwesomeIcon icon={faAddressBook} />
							</Link>
						</div>
						<div className="nav_title">
							<p>
								<strong>AddressHero</strong>
							</p>
						</div>
						<div className="nav_timeline_logo">
							<Link
								className="timeline_logo"
								to="/timeline"
								onClick={this.handleTimelineClick}
							>
								<FontAwesomeIcon icon={faListAlt} />
							</Link>
						</div>
					</div>
					<div className="nav_logins">
						<Link to="/">
							<button className="about_button">About</button>
						</Link>
						<Link to="/login">
							<button className="login_button">Log in</button>
						</Link>
						<Link to="/register">
							<button className="join_button">Sign up</button>
						</Link>
					</div>
				</nav>
			</header>
		);
	}

	renderLogoutLink() {
		return (
			<header className="header">
				<nav className="nav_bar">
					<div className="nav_left">
						<div className="nav_logo">
							<Link
								className="address_logo"
								to="/contacts"
								onClick={this.handleHeroClick}
							>
								<FontAwesomeIcon icon={faAddressBook} />
							</Link>
						</div>
						<div className="nav_title">
							<p>
								<strong>AddressHero</strong>
							</p>
						</div>
						<div className="nav_timeline_logo">
							<Link
								className="timeline_logo"
								to="/timeline"
								onClick={this.handleTimelineClick}
							>
								<FontAwesomeIcon icon={faListAlt} />
							</Link>
						</div>
					</div>
					<div className="nav_logins">
						<Link to="/">
							<button className="about_button">About</button>
						</Link>
						<Link to="/">
							<button
								className="logout_button"
								onClick={this.handleLogoutClick}
							>
								Logout
							</button>
						</Link>
					</div>
				</nav>
			</header>
		);
	}

	render() {
		return (
			<>
				{TokenService.hasAuthToken()
					? this.renderLogoutLink()
					: this.renderLoginLink()}
			</>
		);
	}
}

export default Header;
