import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'

class AboutView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <Navbar  name="AboutView"/>
        </div>
        );
    }
}
 
export default AboutView;