import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ApiContext from '../ApiContext';
import AddressItem from './../AddressItem/AddressItem';

class ContactList extends Component {
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
                <section className="ContactList">
                    <ul className="ContactList_List">
                        <h3 className="ContactList_Header">Address Book</h3>

                        {contacts !== undefined && (

                        <div className="Contact_Container">
                            {contacts.map((contact, index) => 
                                <AddressItem
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
                <Footer></Footer>
            </>

         );
    }
}
 
export default ContactList;