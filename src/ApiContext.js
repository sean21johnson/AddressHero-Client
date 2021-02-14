import React from 'react';

export default React.createContext({
    addresses: [],
    timeline: [],
    indexOfAddress: null,
    addressId: null,
    searchText: "",
    getTimeline: () => {},
    getAllAddresses: () => {},
    handleAddAddress: () => {},
    handleDeleteAddress: () => {},
    handleUpdateAddress: () => {},
    handleSearchFilter: () => {},
    handleSearchUpdate: () => {},
    handleUpdateStateIndex: () => {},
    handleUpdateAddressId: () => {},
    handleUpdateLoggedInOrOut: () => {}
})