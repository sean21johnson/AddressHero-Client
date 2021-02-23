import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import './Timeline.css'
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import TimelineItem from './../TimelineItem/TimelineItem';

class Timeline extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext

    render() { 
        const { timeline } = this.context;

        return ( 
            <>
            <Header></Header>
            <section className="TimelineList">
                <ul className="TimelineList_List">
                    <h3 className="TimelineList_Header">Cards Sent</h3>

                    {timeline !== undefined && (
                        <div className="Timeline_Container">
                            {timeline.map((item, index) => 
                                <TimelineItem
                                    index={index}
                                    key={index}
                                    id={item.timeline_id}
                                    {...item}
                                />
                            )}
                        </div>
                    )}
                </ul>
            </section>
            <div className="Timeline_Footer">
            <Footer></Footer>
            </div>
            </>
         );
    }
}
 
export default Timeline;