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
                <h1>small Talk</h1>
                <div className="LandingPage_Sections">
                    <section className="LandingPage_Description">
                        <h2 className="LandingPage_Description_Header">How We Can Help You</h2>
                        <p className="LandingPage_Description_Paragraph">
                            Reaching out to someone who you haven't spoken to in a while can be awkward, especially
                            during the first minute. That first minute, though, is crucial in building rapport. Ideally, 
                            you want to lead with a light talking point demonstrating that you remember some aspect about their life. 
                            But how can we quickly come up with relatable banter when we can't remember a single thing
                            about this person? Enter Small Talk! Small Talk is here to end awkward silences and give you that 
                            personalized tidbit you can lead the conversation with.
                        </p>
                        <p className="LandingPage_Description_Paragraph">
                            Users create and store contact cards in their Small Talk Address Book. Prior to reaching out to someone, 
                            pull up their contact card and with the simple click of a button, Small Talk will generate a personalized
                            talking point for you. Small Talk's technology utilizes the details stored in the contact card 
                            to communicate with 3rd party API's. These API's provide current news updates which can ultimately be used
                            to discuss something relevant with the person you are reaching out to.
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