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
                            Despite our digital evolution, people still love sending and receiving cards in the mail.
                            A card has a personal and thoughtful sentiment attached to it. The problem
                            lies in keeping track of people's addresses, and remembering who you have sent cards to.
                        </p>
                        <p className="LandingPage_Description_Paragraph">
                            Address Hero is here to help you solve both of these problems. On our site users can create contacts and store the addresses
                            for these contacts. And when you decide to send a card, Address Hero will log the event. Users can view their Timeline
                            for a history of cards they have sent.  
                        </p>
                    </section>
                    <section className="LandingPage_GettingStarted">
                        <h2 className="LandingPage_GettingStarted_Header">Getting Started</h2>
                        <ol className="LandingPage_GettingStared_List">
							<li className="LandingPage_GettingStarted_Item">
								<Link to="/register">Sign up</Link> for an Address Hero account
							</li>
							<li className="LandingPage_GettingStarted_Item">
								<Link to="/login">Login</Link> to your account
							</li>
							<li className="LandingPage_GettingStarted_Item">
								<Link to="/contacts">View</Link> your Address Book
							</li>
							<li className="LandingPage_GettingStarted_Item">
								Add contacts to your Address Book
							</li>
							<li className="LandingPage_GettingStarted_Item">
								Add addresses for those contacts
							</li>
                            <li className="LandingPage_GettingStarted_Item">
								Send Card to contact and log the event
							</li>
							<li className="LandingPage_GettingStarted_Item">
								<Link to="/timeline">View</Link> Timeline of cards sent 
							</li>
						</ol>
                    </section>
                    <section className="LandingPage_Demo">
						<h2 className="LandingPage_Demo_Header">Demo</h2>
						<p className="LandingPage_Demo_Paragraph">
							If you would like to quickly demo Address Hero, please use the below
							username/password to login. An Address Book and Timeline have already been
							created on this demo user account so you can view the features
							that we have to offer.
						</p>
                        <table className="LandingPage_Demo_Table">
                            <tbody>
                                <tr>
                                    <th className="Demo_Table_Header Login">
                                        Login
                                    </th>
                                    <th className="Demo_Table_Header Password">
                                        Password
                                    </th>
                                </tr>
                                <tr>
                                    <td className="Login_Account">
                                        TestAccount
                                    </td>
                                    <td className="Login_Password">
                                        Hero123!
                                    </td>
                                </tr>
                            </tbody>
                        </table>
					</section>
                </div>
            </div>
            <Footer></Footer>
            </>
         );
    }
}
 
export default LandingPage;