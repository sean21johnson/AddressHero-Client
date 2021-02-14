import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ApiContext from '../ApiContext';
import TokenService from './../services/TokenServices';
import config from '../config';
import PrivateRoute from './../Utils/PrivateRoute';
// import PublicOnlyRoute from './../Utils/PublicRoute';
import LandingPage from './../LandingPage/LandingPage';
import CreateNewAddress from './../CreateNewAddress/CreateNewAddress';
import AddressList from './../AddressList/AddressList';
import Login from './../Login/Login';
import Register from './../Register/Register';
import './App.css';
import Timeline from './../Timeline/Timeline';

class App extends Component {
  state = { 
    addreses: [],
    timeline: [],
    indexOfAddress: null,
    addressId: null,
    searchText: "",
    weatherResponse: {},
    loggedIn: false
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
        console.log('made it here')
        if (!response.ok) {
          return response.json().then((error) => Promise.reject(error))
        }
        return Promise.all([response.json()])
    })
    .then(([timeline]) => {
      this.setState({
        timeline
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  getAllAddresses = () => {
    Promise.all([
      fetch(`${config.HERO_API_ENDPOINT}/api/addresses`, {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      })
    ])
      .then(([response]) => {
        if (!response.ok) return response.json().then((e) => Promise.reject(e));
        return Promise.all([response.json()]);
      })
      .then(([addresses]) => {
        this.setState({
          addresses,
          searchName: "",
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

  handleSearchUpdate = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  handleUpdateLoggedInOrOut = () => {
    this.setState({
      loggedIn: true
    })
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.getAllAddresses();
      this.getTimeline();
      return;
    }
  }

  renderRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute path="/add-address" component={CreateNewAddress} />
          <PrivateRoute path="/addresses" component={AddressList} />
          <Route path="/addresses" component={AddressList} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </>
    )
  }

  render() { 
    const value = {
      addresses: this.state.addresses,
      timeline: this.state.timeline,
      indexOfAddress: this.state.indexOfAddress,
      addressId: this.state.addressId,
      searchText: this.state.searchText,
      getTimeline: this.getTimeline,
      getAllAddresses: this.getAllAddresses,
      handleAddAddress: this.handleAddAddress,
      handleDeleteAddress: this.handleDeleteAddress,
      handleUpdateAddress: this.handleUpdateAddress,
      handleSearchFilter: this.handleSearchFilter,
      handleSearchUpdate: this.handleSearchUpdate,
      handleUpdateStateIndex: this.handleUpdateStateIndex,
      handleUpdateAddressId: this.handleUpdateAddressId,
      handleUpdateLoggedInOrOut: this.handleUpdateLoggedInOrOut,
    }


    return ( 
      <>
      {console.log(this.state.timeline)}
      <ApiContext.Provider value={value}>
        <main className="App">{this.renderRoutes()}</main>
      </ApiContext.Provider>
      </>
     );
  }
}
 
export default App;
