import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Row, Col, CardPanel, Input, Button } from 'react-materialize';
import './ContactView.css';

class ContactView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar name="Contact" />
                <Row>
                    <Col l={6} m={12}>
                        <CardPanel>
                            <Row>
                                <Input s={6} label="First Name" validate></Input>
                                <Input s={6} label="Last Name" validate type='tel'></Input>
                                <Input s={12} type="email" label="Email Address" />
                                {/* colocar um contador de caracteres */}
                                <Input s={12} label="Your Comments" type='textarea' />
                                <Button waves='light' flat={true} className="btn-submit">Submit</Button>
                            </Row>
                        </CardPanel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContactView;