import React, { Component } from "react";
import { SideNav, SideNavItem } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <header>
                            <SideNav fixed={true} className="sid-nav">
                                <SideNavItem className="center-align" userView user={{ image: "https://avatars2.githubusercontent.com/u/25830852?s=400&u=d4658e01f2c98bc389448ae52b287053475cd600&v=4" }}/>
                                <Link to={"/home"} > HOME</Link>
                                <Link to={"/aboutme"} > ABOUT ME </Link>
                                <Link to={"/skills"} > SKILLS </Link>
                                <Link to={"/experience"} > EXPERIENCE </Link>
                                <Link to={"/education"} > EDUCATION </Link>
                                <Link to={"/portifolio"} > PORTIFOLIO </Link>
                                <Link to={"/blog"} > BLOG </Link>
                                <Link to={"/cantact"} > CONTACT </Link>
                            </SideNav>
                        </header>
                        <main>

                        </main>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
