import React, { Component } from 'react';
import './LandingPage.css';
import Header from './../Header/Header';
import { Link } from "react-router-dom";
import Footer from './../Footer/Footer';

class LandingPage extends Component {
    
    render() { 
        return ( 
            <>
            <Header></Header>
            <div className="LandingPage">
                <h1>Address Hero</h1>
                <div className="LandingPage_Sections">
                    <section className="LandingPage_Description">
                        <h2 className="LandingPage_Description_Header">How We Can Help You</h2>
                        <p className="LandingPage_Description_Paragraph">

                        </p>
                        <p className="LandingPage_Description_Paragraph">

                        </p>
                    </section>
                    <section className="LandingPage_GettingStarted">
                        <h2 className="LandingPage_GettingStarted_Header">Getting Started</h2>
                        <ol className="LandingPage_GettingStared_List">
							<li>
								<Link to="/register">Sign up</Link> for a Small Talk account
							</li>
							<li>
								<Link to="/login">Login</Link> to your account
							</li>
							<li>
								<Link to="/add-address">Add</Link> contacts
							</li>
							<li>
								<Link to="/addresses">View</Link> your Address Book
							</li>
                            <li>
								Select a contact and get a personalized talking point
							</li>
						</ol>
                    </section>
                    <section className="LandingPage_Demo">
						<h2 className="LandingPage_Demo_Header">Demo</h2>
						<p className="LandingPage_Demo_Paragraph">
							If you would like to quickly demo Small Talk, please use the below
							username/password to login. An Address Book has already been
							created on this demo user account so you can view the features
							that we have to offer.
						</p>
						<p className="LandingPage_Demo_Login">Login: TestAccount</p>
						<p className="LandingPage_Demo_Password">Password: Hero123!</p>
					</section>
                </div>
            </div>
            <Footer></Footer>
            </>
         );
    }
}
 
export default LandingPage;