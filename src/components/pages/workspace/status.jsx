import React, { useEffect, useState } from 'react';
import { Nav, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


function Status(props) {
    return (
        <React.Fragment>
            <div className="row justify-content-end mr-1" activeKey="/home">
                <FontAwesomeIcon icon={faCog} size='lg' className='mb-2' />
            </div>
            <Row>
                <Col xs={2}>Graph</Col>
                <Col>
                    <Row className='ml-5'>
                        <Col >
                            <Row>Queue: </Row>
                            <Row>On-going: </Row>
                            <Row>Stuck: </Row>
                            <Row>Done: </Row>
                            <Row>Progress: </Row>
                        </Col>
                        <Col >
                            <Row>Total Members: </Row>
                            <Row>Total Task</Row>
                            <Row>Privacy: </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Status;