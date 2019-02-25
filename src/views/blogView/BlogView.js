import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';

class BlogView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar name="About View" />
            </div>
        );
    }
}

export default BlogView;