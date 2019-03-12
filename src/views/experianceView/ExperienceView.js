import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import Timeline from '../components/timeline/Timeline';

class ExperienceView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            experienceList : [
                {
                    id:'54859',
                    title:'Trainee in software development',
                    date:'Aug de 2017 – Dec de 2018',
                    description:'Development of application software, I worked with the development of Hybrid Applications, Using Ionic, it has wide use of Angular and TypeScript. Among other technologies that span a front-end developer.',
                    local:'Universidade do Vale do Sapucaí - UNIVÁS'
                },
            ],
            icon: 'work'
        }
    }
    render() {
        const { state } = this;
        
        return (
            <div>
                <Navbar name="Experience" />
                <Timeline icon={state.icon} list={state.experienceList}/>
            </div>
        );    }
}
 
export default ExperienceView;