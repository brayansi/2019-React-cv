import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Row, Col, CardPanel, Table, Button, Icon } from 'react-materialize';
import './AboutMeView.css';

class AboutView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar name="About View" />
                <Row>
                    <Col l={6} m={12}>
                        <CardPanel>
                            <h2 className="title-card">Basic Information</h2>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>Brayan Santos</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td><a href="v.brayansantos@gmail.com">v.brayansantos@gmail.com</a></td>
                                    </tr>
                                    <tr>
                                        <td>Phone:</td>
                                        <td><a href="tel:5535984281354">(35) 9 8428-1354</a></td>
                                    </tr>
                                    <tr>
                                        <td>Date of birth:</td>
                                        <td>29/04/1996</td>
                                    </tr>
                                    <tr>
                                        <td>Nationality:</td>
                                        <td>Brasil</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardPanel>
                    </Col>
                    <Col l={6} m={12}>
                        <CardPanel>
                            <h2 className="title-card">Profissional Profile</h2>
                            <p>Hi, My name is Brayan Vinícius dos Santos, I'm 22 years old, I graduated in Information Systems from UNIVAS, I have almost two years of programming experience. I am a communicative, organized, educated, punctual and responsible person. I like to hang out with friends, listen to podcasts, play games and so on. For success, you really need to love what you do. I love programming and getting to know new technologies (Brayan Santos).</p>
                            <div className="center-align">
                                    <Button waves='light' className="button-resume">DOWNLOAD RESUME<Icon right>cloud_download</Icon></Button>
                                </div>
                        </CardPanel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutView;