import React from 'react';
import { Jumbotron, Row, Col, Nav, Button, Image } from 'react-bootstrap'

function Profile(props) {
    return (
        <Jumbotron>
            <Row>
                <Col xs={3} className='mt-3'>
                    <Image className='w-100' src="https://project-management.com/wp-content/uploads/2017/11/robert-kiyosaki.png" roundedCircle />
                </Col>
                <Col>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Button>Edit Profile</Button>
                    </Nav>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h3>Rober Kiyosaki</h3>
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col>
                                    <Col>
                                        <h4>First Name:</h4>
                                        <h4>Last Name:</h4>
                                        <h4>Email:</h4>
                                    </Col>
                                </Col>
                                <Col>
                                    <Col>
                                        <h4>Gender:</h4>
                                        <h4>Birthdate:</h4>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Jumbotron>
    );
}

export default Profile;