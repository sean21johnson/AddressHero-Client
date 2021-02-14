import React, { Component } from 'react';
import ApiContext from '../ApiContext';

class TimelineItem extends Component {
    
    static contextType = ApiContext;


    render() {
        
        
        return ( 
            <>
            Hello
            </>
         );
    }
}
 
export default TimelineItem;