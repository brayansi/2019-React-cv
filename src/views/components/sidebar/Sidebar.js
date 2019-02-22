import React, { Component } from "react";
import { SideNav } from "react-materialize";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // only consider an event active if its event id is an odd number
    oddEvent = (match, location) => {
        console.log(match)
        console.log(location)
    }

    render() {
        return (
            <div>
                <div>
                    <header>
                        <SideNav fixed={true} className="sid-nav" trigger={
                            <a href="#" data-target="nav-mobile" className="hamburger-menu">
                                <i className="material-icons">menu</i>
                            </a>} options={{ closeOnClick: false }}>
                            <div className="userView">
                                <img className="circle" src='https://avatars2.githubusercontent.com/u/25830852?s=400&u=d4658e01f2c98bc389448ae52b287053475cd600&v=4' alt='user-image' />
                            </div>
                            <NavLink exact activeClassName="link-selected" to={"/"} > HOME</NavLink>
                            <NavLink activeClassName="link-selected" to={"/aboutme"} > ABOUT ME </NavLink>
                            <NavLink activeClassName="link-selected" to={"/skills"} > SKILLS </NavLink>
                            <NavLink activeClassName="link-selected" to={"/experience"} > EXPERIENCE </NavLink>
                            <NavLink activeClassName="link-selected" to={"/education"} > EDUCATION </NavLink>
                            <NavLink activeClassName="link-selected" to={"/portifolio"} > PORTIFOLIO </NavLink>
                            <NavLink activeClassName="link-selected" to={"/blog"} > BLOG </NavLink>
                            <NavLink activeClassName="link-selected" to={"/cantact"} > CONTACT </NavLink>
                        </SideNav>
                    </header>
                </div>
            </div>
        );
    }
}

export default Sidebar;