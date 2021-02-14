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
        const { addresses } = this.context;

        return ( 
            <>
                <Header></Header>
                <section className="AddressList">
                    <ul className="AddressList_List">
                        <h3 className="AddressList_Header">Address Book</h3>

                        {addresses !== undefined && (

                        <div className="Address_Container">
                            {addresses.map((address, index) => (
                                <AddressItem
                                    index={index}
                                    key={address.contact_id}
                                    id={address.contact_id}
                                    {...address}
                                />
                            ))}
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