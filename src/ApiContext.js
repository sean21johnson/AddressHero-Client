import React from 'react';

export default React.createContext({
    addresses: [],
    indexOfAddress: null,
    addressId: null,
    searchText: "",
    weatherResponse: {},
    getAllAddresses: () => {},
    getTheWeather: () => {},
    handleAddAddress: () => {},
    handleDeleteAddress: () => {},
    handleUpdateAddress: () => {},
    handleSearchFilter: () => {},
    handleSearchUpdate: () => {},
    handleUpdateIndex: () => {},
    handleUpdateAddressId: () => {},
    handleUpdateLoggedInOrOut: () => {}

})