import React, { Component } from 'react';
import { Row, Col, Button, Icon } from "react-materialize";
import mainLogo from './../../assets/img/Assinatura-digital.png';

import './HomeView.css';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
                <div className="container-background"></div>
                <div className="content">
                    <Row className="content-flex">
                        <Col s={6} className="ass-image">
                            <img src={mainLogo} alt='ass' />
                        </Col>
                        <Col s={6} className="apresentation">
                            <div>
                                <h3>Hi, I'm</h3>
                                <h1>BRAYAN SANTOS</h1>
                                <h2>FRONT END DEVELOPER</h2>
                                <div className="center-align">
                                    <Button waves='light'>button<Icon right>cloud</Icon></Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default HomeView;