import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';

class ExperienceView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Navbar name="Experience" />
            </div>
        );    }
}
 
export default ExperienceView;