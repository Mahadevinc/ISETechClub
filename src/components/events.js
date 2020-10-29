import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Events } from "./images/events.png";

class Event extends Component {
    render() {
        return(
        
            <div>

                <Jumbotron className="eventsHeader">
                <section className="section-notes" id="services">
                    <p className="sectiontag text-medium text1" >
                        EVENTS
                    </p>
                    <div className="thumb-notes">
                        <img src={ Events } alt=" Events " className="imgfluid" />
                    </div>
                    
                </section>
                </Jumbotron>

                
            </div>
            
        )
    }
}


export default Event;
