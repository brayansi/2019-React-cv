import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import Timeline from '../components/timeline/Timeline';


class EducationView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            educationList : [
                {
                    id:'985623',
                    title:'Bachelor in Information Systems',
                    date:'jan de 2015 – dec de 2018',
                    description:'The Information Technology Professional with the capacity to understand real world problems, the application of the knowledge acquired in solving problems, the ability to systematically analyze problems, the ability to synthesise and carry out projects, and finally the ability to evaluation and judgment.',
                    local:'Fundação Instituto Nacional de Telecomunicações - INATEL'
                }
            ],
            icon: 'school'
        }
    }
    render() { 
        const { state } = this;

        return (
            <div>
                <Navbar name="Education" />
                <Timeline icon={state.icon} list={state.educationList}/>
            </div>
        );    }
}
 
export default EducationView;