import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';

class EducationView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Navbar name="Education" />
            </div>
        );    }
}
 
export default EducationView;