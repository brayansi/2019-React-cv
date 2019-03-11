import React, { Component } from 'react';
import face from './../../../assets/icons/btn--face__rounded.png';
import github from './../../../assets/icons/btn--github__rounded.png';
import linkedin from './../../../assets/icons/btn--in__rounded.png';
import insta from './../../../assets/icons/btn--insta__rounded.png';
import youtube from './../../../assets/icons/btn--yt__rounded.png';
import twitter from './../../../assets/icons/btn-twi__rounded.png';




import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="container-contact">
                <a href="https://www.facebook.com/brayan.santos.94"><img src={face} /></a> 
                <a href="https://twitter.com/brayansanttoss"><img src={twitter} /></a>
                <a href="https://www.linkedin.com/in/brayan-santos-0a7b8b9a"><img src={linkedin} /></a>
                <a href="https://www.instagram.com/brayansanttoss"><img src={insta} /></a>
                <a href="https://www.youtube.com/channel/UCsNzttNEGOazCliC57unOFA"><img src={youtube} /></a>
                <a href="https://github.com/brayansi"><img src={github} /></a>
            </div>
        );
    }
}
 
export default Contact;