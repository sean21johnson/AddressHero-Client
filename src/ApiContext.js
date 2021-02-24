import React from "react";

export default React.createContext({
	contacts: [],
	addresses: [],
	timeline: [],
	indexOfAddress: null,
	addressId: null,
	searchText: "",
	profileButtonView: true,
	getTimeline: () => {},
	getAllAddresses: () => {},
	handleAddAddress: () => {},
	handleDeleteAddress: () => {},
	handleUpdateAddress: () => {},
	handleSearchFilter: () => {},
	handleSearchUpdate: () => {},
	handleUpdateStateIndex: () => {},
	handleUpdateAddressId: () => {},
	handleAddToTimeline: () => {},
	handleProfileButtonViewToFalse: () => {},
	handleProfileButtonViewToTrue: () => {},
	formatPhoneNumber: () => {},
});
