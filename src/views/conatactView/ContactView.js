import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';

class ContactView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Navbar name="Contact" />
            </div>
        );    }
}
 
export default ContactView;