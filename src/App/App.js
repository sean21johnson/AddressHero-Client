import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ApiContext from '../ApiContext';
import TokenService from './../services/TokenServices';
import config from '../config';
import PrivateRoute from './../Utils/PrivateRoute';
import PublicOnlyRoute from './../Utils/PublicRoute';
import LandingPage from './../LandingPage/LandingPage';
import CreateNewAddress from './../CreateNewAddress/CreateNewAddress';
import AddressList from './../AddressList/AddressList';
import Login from './../Login/Login';
import Register from './../Register/Register';
import './App.css';

class App extends Component {
  state = { 
    addreses: [],
    indexOfAddress: null,
    addressId: null,
    searchText: "",
    dropdownText: "",
    weatherResponse: {},
    loggedIn: false
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
          dropdownText: ""
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

  handleDeleteAddress = (addressId) => {
    this.setState({
      addresses: this.state.addresses.filter((address) => address.address_id !== addressId)
    })
  }

  handleUpdateAddress = () => {
    this.getAllAddresses();
    this.setState({
      idOfAddress: null
    })
  }

  handleUpdateIndex = (index) => {
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

  getTheWeather = (zip) => {
    fetch(`${config.WEATHER_API_ENDPOINT}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      return this.getAllAddresses();
    }
  }

  renderRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <PrivateRoute path="/add-address" component={CreateNewAddress} /> */}
          <PublicOnlyRoute path="/add-address" component={CreateNewAddress} />
          {/* <PrivateRoute path="/addresses" component={AddressList} /> */}
          <PublicOnlyRoute path="/addresses" component={AddressList} />

          <PublicOnlyRoute path="/login" component={Login} />
          <PublicOnlyRoute path="/register" component={Register} />
        </Switch>
      </>
    )
  }

  render() { 
    const value = {
      addresses: this.state.addresses,
      indexOfAddress: this.state.indexOfAddress,
      addressId: this.state.addressId,
      searchText: this.state.searchText,
      weatherResponse: this.state.weatherResponse,
      getAllAddresses: this.getAllAddresses,
      getTheWeather: this.getTheWeather,
      handleAddAddress: this.handleAddAddress,
      handleDeleteAddress: this.handleDeleteAddress,
      handleUpdateAddress: this.handleUpdateAddress,
      handleSearchFilter: this.handleSearchFilter,
      handleSearchUpdate: this.handleSearchUpdate,
      handleUpdateIndex: this.handleUpdateIndex,
      handleUpdateAddressId: this.handleUpdateAddressId,
      handleUpdateLoggedInOrOut: this.handleUpdateLoggedInOrOut,
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
