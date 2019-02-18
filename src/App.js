import React, { Component, Suspense } from "react";
import { SideNav, SideNavItem } from "react-materialize";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import "./App.css";

const AboutMeView = React.lazy(() => import("./views/AboutMeView"));
const BlogView = React.lazy(() => import("./views/BlogView"));
const ContactView = React.lazy(() => import("./views/ContactView"));
const EducationView = React.lazy(() => import("./views/EducationView"));
const ExperienceView = React.lazy(() => import("./views/ExperienceView"));
const HomeView = React.lazy(() => import("./views/home/HomeView"));
const PortifolioView = React.lazy(() => import("./views/PortifolioView"));
const SkillsView = React.lazy(() => import("./views/SkillsView"));

class App extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    // only consider an event active if its event id is an odd number
    oddEvent = (match, location) => {
        console.log(match)
        console.log(location)

    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <header>
                            <SideNav fixed={true} className="sid-nav">
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
                        <main>
                            <Suspense fallback={<div></div>}>
                                <Route path={"/"} exact component={props => <HomeView {...props} />} />
                                <Route path={"/aboutme"} component={props => <AboutMeView {...props} />} />
                                <Route path={"/skills"} component={props => <SkillsView {...props} />} />
                                <Route path={"/experience"} component={props => <ExperienceView {...props} />} />
                                <Route path={"/education"} component={props => <EducationView {...props} />} />
                                <Route path={"/portifolio"} component={props => <PortifolioView {...props} />} />
                                <Route path={"/blog"} component={props => <BlogView {...props} />} />
                                <Route path={"/cantact"} component={props => <ContactView {...props} />} />
                            </Suspense>
                        </main>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
