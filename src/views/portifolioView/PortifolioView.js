import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';

class PortifolioView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Navbar name="Portifilio" />
            </div>
        );    }
}
 
export default PortifolioView;