import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import config from './../config';
import './Register.css';
import ApiContext from '../ApiContext';

class Register extends Component {
    state = {
        error: ""
    }

	static contextType = ApiContext;

	handleClickCancel = () => {
		this.props.history.push('/');
	  }

    handleRegisterSubmit = (event) => {
        event.preventDefault();
        const { first_name, last_name, email, username, password } = event.target;
        const newUser = {
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            username: username.value,
            password: password.value
        }
        fetch(`${config.HERO_API_ENDPOINT}/api/users`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((e) => Promise.reject(e))
            }
        })
        .then((user) => {
            this.props.history.push("/login")
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
				<div className="Register">
					<h2 className="Register_Header">Register Here</h2>
					<form className="Register_Form" onSubmit={this.handleRegisterSubmit}>
						<div className="First_Name_Div">
							<label className="First_Name_Class" htmlFor="first_name">
								First Name:
							</label>
							<input
								className="Register_Input"
								type="text"
								name="first_name"
								id="first_name"
								required
							></input>
						</div>
						<div className="Last_Name_Div">
							<label className="Last_Name_Class" htmlFor="last_name">
								Last Name:
							</label>
							<input
								className="Register_Input"
								type="text"
								name="last_name"
								id="last_name"
								required
							></input>
						</div>
						<div className="Email_Div">
							<label className="Email_Class" htmlFor="email">
								Email:
							</label>
							<input className="Register_Input" type="text" name="email" id="email" required></input>
						</div>
						<div className="Username_Div">
							<label className="Username_Class" htmlFor="username">
								Username:
							</label>
							<input className="Register_Input" type="text" name="username" id="username" required></input>
						</div>
						<div className="Password_Div">
							<label className="Password_Class" htmlFor="password">
								Password:
							</label>
							<input
								className="Register_Input"
								type="password"
								name="password"
								id="password"
								required
							></input>
						</div>
						<div className="Register_Buttons">
							<button
								className="Register_Cancel_Button"
								type="button"
								onClick={this.handleClickCancel}
							>
								Cancel
							</button>
							<button className="Register_Submit_Button" type="submit">
								Submit
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
				<div className="Register_Footer">
				<Footer></Footer>
				</div>
			</>
		);
	}
}
 
export default Register;