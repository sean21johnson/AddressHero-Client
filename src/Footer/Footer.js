import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer_brand-container">
					<div className="footer_social-media">
						<a
							className="github_logo"
							href="https://github.com/sean21johnson"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon className="github" icon={faGithub} />
						</a>
						<a
							className="linkedin_logo"
							href="https://linkedin.com/in/seanjohnson220"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon className="linkedin" icon={faLinkedin} />
						</a>
					</div>
					<div className="copyright-text">
						<p className="copyright_paragraph">
							Copyright © 2021
							<br />
						</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
