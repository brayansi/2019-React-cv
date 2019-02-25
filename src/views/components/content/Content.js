import React, { Suspense } from 'react'
import { Route } from 'react-router-dom';

const AboutMeView = React.lazy(() => import("./../../aboutMeView/AboutMeView"));
const BlogView = React.lazy(() => import("./../../blogView/BlogView"));
const ContactView = React.lazy(() => import("./../../conatactView/ContactView"));
const EducationView = React.lazy(() => import("./../../educationView/EducationView"));
const ExperienceView = React.lazy(() => import("./../../experianceView/ExperienceView"));
const HomeView = React.lazy(() => import("./../../home/HomeView"));
const PortifolioView = React.lazy(() => import("./../../portifolioView/PortifolioView"));
const SkillsView = React.lazy(() => import("./../../skillsView/SkillsView"));

export default function Content(props) {
    return <main>
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
}