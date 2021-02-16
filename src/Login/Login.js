import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import './Login.css';
import config from './../config';
import TokenService from './../services/TokenServices';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

class Login extends Component {
    state = {
        error: ""
    }

    static contextType = ApiContext;

    handleClickCancel = () => {
        this.props.history.push('/')
    }

    handleLoginSubmit = (event) => {
        event.preventDefault();
        const { login_username, login_password } = event.target;
        const loginAttempt = {
            username: login_username.value,
            password: login_password.value
        }

        fetch(`${config.HERO_API_ENDPOINT}/api/login`, {
            method: "POST",
            body: JSON.stringify(loginAttempt),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((e) => Promise.reject(e));
            }
			return response.json();
        })
        .then((confirmedUser) => {
            TokenService.saveAuthToken(confirmedUser.authToken);
            this.props.history.push('/contacts')
            this.context.getAllContacts();
        })
        .catch((e) => {
            this.setState({
                error: e
            })
        })
    }

    render() { 
        return ( 
			<>
				<Header></Header>
				<div className="Login">
					<h2 className="Login_Header">Login</h2>
					<form className="Login_Form" onSubmit={this.handleLoginSubmit}>
						<div className="Login_Username_Div">
							<label className="Login_Username_Class" htmlFor="login_username">
								Username:
							</label>
							<input
								type="text"
								name="login_username"
								id="Login_Username"
								required
							></input>
						</div>
						<div className="Login_Password_Div">
							<label className="Login_Password_Class" htmlFor="login_password">
								Password:
							</label>
							<input
								type="password"
								name="login_password"
								id="login_password"
								required
							></input>
						</div>
						<div className="Login_Buttons">
							<button
								className="Login_Cancel_Button"
								type="button"
								onClick={this.handleClickCancel}
							>
								Cancel
							</button>
							<button className="Login_Submit_Button" type="submit">
								Log in
							</button>
						</div>
					</form>

					{this.state.error !== "" ? (
						<div className="Error_Message">
							Error: {JSON.stringify(this.state.error).slice(10).slice(0, -2)}.
							Please try again.
						</div>
					) : (
						""
					)}
				</div>
				<Footer></Footer>
			</>
         );
    }
}
 
export default Login;