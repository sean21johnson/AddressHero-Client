import React, { Component } from 'react';
import './AddressList.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ApiContext from '../ApiContext';
import AddressItem from './../AddressItem/AddressItem';

class AddressList extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    render() { 
        const { contacts } = this.context;

        return ( 
            <>
                <Header></Header>
                <section className="AddressList">
                    <ul className="AddressList_List">
                        <h3 className="AddressList_Header">Address Book</h3>

                        {contacts !== undefined && (

                        <div className="Address_Container">
                            {contacts.map((contact, index) => contact.fullname)}
                        </div>

)}
                    </ul>
                </section>
                <Footer></Footer>
            </>

         );
    }
}
 
export default AddressList;