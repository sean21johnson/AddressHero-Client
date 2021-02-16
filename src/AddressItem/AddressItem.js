import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import { Link } from "react-router-dom";
import './AddressItem.css';
import config from './../config';

class AddressItem extends Component {

    static contextType = ApiContext;



    render() {
        return ( 
        <>
            <div>
                <li>
                    <div>
                        {this.props.fullname}
                    </div>
                    <div>
                        <Link
                            to={`/contacts/${this.props.id}`}
                        
                        >
                        <button>View Profile</button>
                        </Link>
                    </div>
                </li>
            </div>
        </>
        )
        }
}
 
export default AddressItem;