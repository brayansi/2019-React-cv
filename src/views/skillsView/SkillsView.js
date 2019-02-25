import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';

class SkillsView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Navbar name="Skills" />
            </div>
        );    }
}
 
export default SkillsView;