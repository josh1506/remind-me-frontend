import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import Login from './landingPageCommon/login';
import Register from './landingPageCommon/register';
import ForgotPass from './landingPageCommon/forgotpass';
import CarouselFunc from './../common/carouselFunc';
import axios from 'axios'


function LandingPage(props) {
    return (
        <Container fluid >
            <Row>
                <Col fluid>
                    <CarouselFunc />
                </Col>
                <Col xs lg="5">
                    {/* <Login /> */}
                    <Register />
                    {/* <ForgotPass /> */}
                </Col>

            </Row>
        </Container >
    );
}

export default LandingPage;