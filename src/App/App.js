import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ApiContext from '../ApiContext';
import TokenService from './../services/TokenServices';
import config from '../config';
import PrivateRoute from './../Utils/PrivateRoute';
import PublicOnlyRoute from './../Utils/PublicRoute';
import LandingPage from './../LandingPage/LandingPage';
import Login from './../Login/Login';
import Register from './../Register/Register';
import Timeline from './../Timeline/Timeline';
import ContactList from './../ContactList/ContactList';
import ContactProfile from './../ContactProfile/ContactProfile';
import './App.css';

class App extends Component {
  state = { 
    contacts: [],
    addreses: [],
    timeline: [],
    indexOfAddress: null,
    addressId: null,
    searchText: "",
    weatherResponse: {},
    loggedIn: false,
    profileButtonView: true
  }

  sortTimeline = (timeline) => {
    timeline.sort((a, b) => b.timeline_id - a.timeline_id)
    this.setState({
      timeline: timeline
    })
  }



  getTimeline = () => {
    Promise.all([
      fetch(`${config.HERO_API_ENDPOINT}/api/timeline`, {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      })
    ])
    .then(([response]) => {
        if (!response.ok) {
          return response.json().then((error) => Promise.reject(error))
        }
        return Promise.all([response.json()])
    })
    .then(([timeline]) => {
      this.sortTimeline(timeline);
      this.setState({
        timeline
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  sortContacts = (contacts) => {
    contacts.sort((a, b) => b.id - a.id)
    this.setState({
      contacts: contacts
    })
  }



  handleProfileButtonViewToFalse = () => {
    this.setState({
      profileButtonView: false
    })
  }

  getAllContacts = () => {
    Promise.all([
      fetch(`${config.HERO_API_ENDPOINT}/api/contacts`, {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      })
    ])
      .then(([response]) => {
        if (!response.ok) return response.json().then((e) => Promise.reject(e));
        return Promise.all([response.json()]);
      })
      .then(([contacts]) => {
        this.sortContacts(contacts)
        this.setState({
          searchText: "",
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  handleSearchFilter = (searchName) => {
    Promise.all([
			fetch(`${config.HERO_API_ENDPOINT}/addresses?search=${searchName}`, {
				headers: {
					authorization: `bearer ${TokenService.getAuthToken()}`,
				},
			}),
		])
			.then(([response]) => {
				if (!response.ok) return response.json().then((e) => Promise.reject(e));

				return Promise.all([response.json()]);
			})
			.then(([addresses]) => {
				this.setState({
					addresses,
					searchText: searchName,
				});
			});
	};

  formatPhoneNumber = (number) => {
    let firstThree = number.substring(0, 3);
    let nextThree = number.substring(3, 6)
    let lastFour = number.substring(6, 10)

    return `(${firstThree}) ${nextThree}-${lastFour}`;
  }

  updateContactList = (contacts) => {
    this.setState({
      contacts: contacts
    })
  }

  handleAddAddress = (address) => {
    this.setState({
      addresses: [...this.state.addresses, address]
    })
  }

  handleDeleteAddress = (contactId) => {
    this.setState({
      addresses: this.state.addresses.filter((address) => address.contact_id !== contactId)
    })
  }

  handleUpdateAddress = () => {
    this.getAllAddresses();
    this.setState({
      idOfAddress: null
    })
  }

  handleUpdateStateIndex = (index) => {
    this.setState({
      indexOfAddress: index,
      addressId: null
    })
  }

  handleUpdateAddressId = (id) => {
    if (id === this.state.addressId) {
      this.setState({
        addressId: null
      })
    }
    else {
      this.setState({
        addressId: id
      })
    }
  }

  handleSearchChange = (searchTerm) => {
    this.setState({
      searchText: searchTerm
    })
  }

  handleAddToTimeline = (timelinePost) => {
    this.setState({
      timeline: [...this.state.timeline, timelinePost]
    })
  }


  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.getAllContacts();
      this.getTimeline()
      return;
    }
  }

  renderRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/contacts" component={ContactList} />
          <PrivateRoute path="/contacts/:id" component={ContactProfile} />
          <PublicOnlyRoute path="/login" component={Login} />
          <PublicOnlyRoute path="/register" component={Register} />
          <PrivateRoute path="/timeline" component={Timeline} />
        </Switch>
      </>
    )
  }

  render() { 
    const value = {
      contacts: this.state.contacts,
      addresses: this.state.addresses,
      timeline: this.state.timeline,
      indexOfAddress: this.state.indexOfAddress,
      addressId: this.state.addressId,
      searchText: this.state.searchText,
      profileButtonView: this.state.profileButtonView,
      getAllContacts: this.getAllContacts,
      getTimeline: this.getTimeline,
      handleAddAddress: this.handleAddAddress,
      handleDeleteAddress: this.handleDeleteAddress,
      handleUpdateAddress: this.handleUpdateAddress,
      handleSearchFilter: this.handleSearchFilter,
      handleSearchChange: this.handleSearchChange,
      handleUpdateStateIndex: this.handleUpdateStateIndex,
      handleUpdateAddressId: this.handleUpdateAddressId,
      handleAddToTimeline: this.handleAddToTimeline,
      updateContactList: this.updateContactList,
      formatPhoneNumber: this.formatPhoneNumber,
      handleProfileButtonViewToFalse: this.handleProfileButtonViewToFalse
    }


    return ( 
      <>
      <ApiContext.Provider value={value}>
        <main className="App">{this.renderRoutes()}</main>
      </ApiContext.Provider>
      </>
     );
  }
}
 
export default App;
