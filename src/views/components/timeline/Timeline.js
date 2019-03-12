import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import './Timeline.css';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { props } = this,
            { icon, list } = props;
        return (<div className="container-timeline">
            <ul className="timeline">
                <div>
                    <Icon small left className="icon">{icon}</Icon>
                </div>

                {
                    list.map(item => {
                        return <li key={item.id}>
                            <div className="direction">
                                <h2> {item.title} <span>/ {item.date} </span></h2>
                                <p> {item.description} </p>
                                <span className="right"> {item.local}</span>
                            </div>
                        </li>
                    })
                }

            </ul>
        </div>);
    }
}

export default Timeline;