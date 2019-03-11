import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import Contact from '../components/contact/Contact'
import { Row, Col, CardPanel, Input, Button } from 'react-materialize';
import './ContactView.css';

class ContactView extends Component {
    static defaultProps = {
        limit: 150
    }

    constructor(props) {
        super(props);
        this.state = {
            totalChars: 0,
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const element = event.target,
            text = element.value;

        if (text.length <= this.props.limit) {
            this.setState({
                totalChars: text.length,
                text
            });
        }
    }
    render() {
        const { state, props } = this;
        return (
            <div>
                <Navbar name="Contact" />
                <div>
                    <Row>
                        <Col l={6} m={12}>
                            <CardPanel>
                                <Row>
                                    <Input s={12} l={6} label="First Name" validate></Input>
                                    <Input s={12} l={6} label="Last Name" validate type='tel'></Input>
                                    <Input s={12} type="email" label="Email Address" />
                                    {/* colocar um contador de caracteres */}
                                    <Input s={12} label="Your Comments" type='textarea' onChange={this.handleChange} value={state.text} />
                                    <Col s={12}>
                                        <span  className="right count-textarea">{state.totalChars} / {props.limit}</span>
                                    </Col>
                                    <Col s={12}>
                                        <Button waves='light' flat={true} className="btn-submit">Submit</Button>
                                    </Col>
                                </Row>
                                <Contact></Contact>
                            </CardPanel>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ContactView;