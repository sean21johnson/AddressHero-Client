import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import TokenService from "./../services/TokenServices";
import { withRouter } from "react-router";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import AddressList from "./../AddressList/AddressList";
import AddNewAddress from "./../AddNewAddress/AddNewAddress";
import SendCard from './../SendCard/SendCard';
import AddressBar from './../AddressBar/AddressBar';
import ContactItem from './../ContactItem/ContactItem';
import './ContactProfile.css'

class ContactProfile extends Component {
	state = {
		contact: null,
		contactAddresses: [],
		addAddressDisplay: false,
		sendCardDisplay: false
	};

	static contextType = ApiContext;

	getContactProfile = (contact_id) => {
		Promise.all([
			fetch(`${config.HERO_API_ENDPOINT}/api/contacts/${contact_id}`, {
				headers: {
					authorization: `bearer ${TokenService.getAuthToken()}`,
				},
			}),
		])
			.then(([response]) => {
				if (!response.ok) return response.json().then((e) => Promise.reject(e));
				return Promise.all([response.json()]);
			})
			.then(([contact]) => {
				this.setState({
					contact,
				});
			})
			.catch((error) => {
				console.error("User Profile Not Available");
			});
	};

	getContactAddresses = (contact_id) => {
		Promise.all([
			fetch(
				`${config.HERO_API_ENDPOINT}/api/contacts/${contact_id}/addresses`,
				{
					headers: {
						authorization: `bearer ${TokenService.getAuthToken()}`,
					},
				}
			),
		])
			.then(([response]) => {
				if (!response.ok) return response.json().then((e) => Promise.reject(e));
				return Promise.all([response.json()]);
			})
			.then(([contactAddresses]) => {
				this.setState({
					contactAddresses,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

	deleteAddress = (id) => {
		fetch(
			`${config.HERO_API_ENDPOINT}/api/contacts/${this.state.contact.id}/addresses`,
			{
				method: "DELETE",
				headers: {
					authorization: `bearer ${TokenService.getAuthToken()}`,
					"content-type": "application/json",
				},
				body: JSON.stringify({ id: id }),
			}
		)
			.then((res) => {
				if (!res.ok) return res.json.then((e) => Promise.reject(e));
			})
			.then(() => {
				this.setState({
					contactAddresses: this.state.contactAddresses.filter(
						(address) => address.id !== id
					),
				});
			});
	};

	addNewAddress = (event) => {
		event.preventDefault();
		const {
			address_street,
			address_city,
			address_state,
			address_zip,
			address_map,
		} = event.target;
		let newAddress = {
			street: address_street.value,
			city: address_city.value,
			us_state: address_state.value,
			zip: address_zip.value,
			map: address_map.value,
		};
		fetch(
			`${config.HERO_API_ENDPOINT}/api/contacts/${this.state.contact.id}/addresses`,
			{
				method: "POST",
				body: JSON.stringify(newAddress),
				headers: {
					authorization: `bearer ${TokenService.getAuthToken()}`,
					"content-type": "application/json",
				},
			}
		)
			.then((response) => {
				if (!response.ok) {
					return response.json().then((e) => Promise.reject(e));
				}
				return response.json();
			})
			.then((address) => {
				this.setState({
					contactAddresses: [...this.state.contactAddresses, address],
					addAddressDisplay: false
				});
			});
	};

	addTimelinePost = (event) => {
		event.preventDefault();
		const { card_address, card_type } = event.target;
		let newTimelinePost = {
			event_type: card_type.value,
			address_id: card_address.value,
		};
		fetch(
			`${config.HERO_API_ENDPOINT}/api/contacts/${this.state.contact.id}/cardType`,
			{
				method: "POST",
				body: JSON.stringify(newTimelinePost),
				headers: {
					authorization: `bearer ${TokenService.getAuthToken()}`,
					"content-type": "application/json",
				},
			}
		)
			.then((response) => {
				if (!response.ok) {
					return response.json().then((e) => Promise.reject(e));
				}
				return response.json();
			})
			.then((newPost) => {
				this.setState({
					sendCardDisplay: false
				})
				this.context.handleAddToTimeline(newPost);
				this.context.getTimeline();
				this.props.history.push("/timeline");
			});
	};

	handleAddAddressClickCancel = () => {
		this.setState({
			addAddressDisplay: false
		})
	}

	handleSendCardClickCancel = () => {
		this.setState({
			sendCardDisplay: false
		})
	}

	handleAddAddressButtonClicked = () => {
		this.setState({
			addAddressDisplay: true
		})
	}

	handleSendCardButtonClicked = () => {
		this.setState({
			sendCardDisplay: true
		})
	}

	reDirect = () => {
		this.props.history.push('/contacts')
	}

	componentDidMount() {
		let contact_id = this.props.match.params.id;
		this.getContactProfile(contact_id);
		this.getContactAddresses(contact_id);
		this.context.handleProfileButtonViewToFalse();
	}

	render() {
		const { contact, contactAddresses, addAddressDisplay, sendCardDisplay } = this.state;
		return (
			<>
				<Header></Header>
				<div className="ContactProfile">
					
					<div className="ContactProfile_AddressBar">
					<AddressBar
						handleAddAddressButtonClicked={this.handleAddAddressButtonClicked}
						handleSendCardButtonClicked={this.handleSendCardButtonClicked}
						contactAddresses={contactAddresses}
					/>
					</div>

						{contact !== null ? (
						<div className="Profile_Contact_Item">
						<ContactItem
						contact={contact}
						picture={contact.picture}
						id={contact.id}
						fullname={contact.fullname}
						phone_number={contact.phone_number}
						reDirect={this.reDirect}
						/> 
						</div>
						) : ""}

						{addAddressDisplay !== false ? (
						<div className="ContactProfile_AddAddress">
						<AddNewAddress 
							contact={contact} 
							addNewAddress={this.addNewAddress} 
							handleAddAddressClickCancel={this.handleAddAddressClickCancel}	
						/>
						</div>
						) : ""}
						
						
						{sendCardDisplay !== false ? (
						<div className="ContactProfile_SendCard">
						<SendCard
							contact={contact}
							contactAddresses={contactAddresses}
							addTimelinePost={this.addTimelinePost}
							handleSendCardClickCancel={this.handleSendCardClickCancel}
						/>
						</div>
						): ""}


						{contactAddresses.length !== 0 ? (
							<div className="ContactProfile_AddressList">
							<AddressList
								contactAddresses={contactAddresses}
								contact={contact}
								deleteAddress={this.deleteAddress}
							/>
							</div>
						) : (
							""
						)}


				</div>
					<div className="Profile_Footer">
					</div>
					<Footer></Footer>
			</>
		);
	}
}

export default withRouter(ContactProfile);
