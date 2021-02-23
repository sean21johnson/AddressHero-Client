import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ApiContext from '../ApiContext';
import ContactItem from '../ContactItem/ContactItem';
import config from './../config';
import TokenService from './../services/TokenServices';
import AddNewContact from './../AddNewContact/AddNewContact';
import ContactBar from './../ContactBar/ContactBar';
import "./ContactList.css";

class ContactList extends Component {

    state = {
        addContactDisplay: false,
    }

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    handleSearchFilter = (searchTerm) => {
        Promise.all([
			fetch(`${config.HERO_API_ENDPOINT}/api/contacts?search=${searchTerm}`, {
				headers: {
					authorization: `bearer ${TokenService.getAuthToken()}`,
				},
			}),
		])
			.then(([response]) => {
				if (!response.ok) return response.json().then((e) => Promise.reject(e));
				return Promise.all([response.json()]);
			})
			.then(([contacts]) => {
                this.context.updateContactList(contacts)
			});
    }

    handleSearchChange = (event) => {
        let searchTerm = event.target.value
        this.context.handleSearchChange(searchTerm)
    }

    handleSearchChoice = (event) => {
        if (event.key === "Enter") 
        this.handleSearchFilter(event.target.value)
    }

    addButtonClicked = () => {
        this.setState({
            addContactDisplay: true
        })
    }

    addCancelClicked = () => {
        this.setState({
            addContactDisplay: false
        })
    }

    addContact = (event) => {
        event.preventDefault()
        const { contact_name, contact_phone, contact_picture } = event.target;
        let newContact = {
            fullname: contact_name.value,
            phone_number: contact_phone.value,
            picture: contact_picture.value
        }
        fetch(`${config.HERO_API_ENDPOINT}/api/contacts`, {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then((e) => Promise.reject(e))
            }
            return response.json()
        })
        .then((contact) => {
            this.context.getAllContacts();
            this.props.history.push(`/contacts/${contact.id}`)
        })
    }

    componentDidMount() {
        this.context.handleProfileButtonViewToTrue()
    }

    static contextType = ApiContext;

    render() { 
        const { contacts, searchText} = this.context;
        const { addContactDisplay } = this.state;

        return ( 
            <>
                <Header></Header>

                <ContactBar 
                    addButtonClicked={this.addButtonClicked}
                    handleSearchChange={this.handleSearchChange}
                    handleSearchChoice={this.handleSearchChoice}
                    searchText={searchText}
                    />

                
                {addContactDisplay === true ?     
                <AddNewContact 
                    addContact={this.addContact}
                    addCancelClicked={this.addCancelClicked}
                    /> : ""}


                <section className="ContactList">
                    <ul className="ContactList_List">
                        <h3 className="ContactList_Header">Address Book</h3>
            

                        {contacts !== undefined && (

                        <div className="Contact_Container">
                            {contacts.map((contact, index) => 
                                <ContactItem
                                    index={index}
                                    key={contact.id}
                                    id={contact.id}
                                    {...contact}
                                />
                            )}
                        </div>

                        )}
                    </ul>
                </section>

                <div className="ContactList_Footer">
                <Footer></Footer>
                </div>
            </>

         );
    }
}
 
export default ContactList;