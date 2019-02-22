import React, { Component } from "react";
import Sidebar from './views/components/sidebar/Sidebar';
import Content from './views/components/content/Content';

import { BrowserRouter as Router } from 'react-router-dom';

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Sidebar />
                        <Content />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
