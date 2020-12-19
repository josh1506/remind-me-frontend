import React, { useState } from 'react';
import { Container, Row, Col, Nav, Table, ListGroup, Form } from 'react-bootstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function WorkspacePage(props) {
    const [startDate, setStartDate] = useState(new Date());
    const tableHeader = [
        { id: 1, label: 'Task' },
        { id: 2, label: 'Status' },
        { id: 3, label: 'Comment' },
        { id: 4, label: 'People' },
        { id: 5, label: 'Due Date' },
    ]


    return (
        <Container fluid>
            <Row>
                <Col xs={2} className='mt-3'>
                    <Nav className="justify-content-end" activeKey="/home">
                        <p>add(logo)</p>
                    </Nav>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li">Personal Workboard</ListGroup.Item>
                        <ListGroup.Item as="li">Cloudstaff</ListGroup.Item>
                        <ListGroup.Item as="li">Toro</ListGroup.Item>
                        <ListGroup.Item as="li">Clark Outsourcing</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col >
                    <Nav className="justify-content-end" activeKey="/home">
                        <p>Settings(logo)</p>
                    </Nav>
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

                    <Row className='mt-4'>
                        <h3>Backend Features</h3>
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    {tableHeader.map(tableHead => <th key={tableHead.id}>{tableHead.label}</th>)}
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>User Login</td>
                                    <td>
                                        <Form.Control as="select" custom className={`text-white bg-${getStatus('done')}`}>
                                            <option className='bg-white text-dark'>Queue</option>
                                            <option className='bg-white text-dark'>On-going</option>
                                            <option className='bg-white text-dark'>Stuck</option>
                                            <option className='bg-white text-dark'>Done</option>
                                        </Form.Control>

                                    </td>
                                    <td>(Comment Icon)</td>
                                    <td>(UserIcon)</td>
                                    <td><DatePicker selected={startDate} onChange={date => setStartDate(date)} /></td>
                                </tr>

                            </tbody>
                        </Table>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}

const getStatus = (status) => {
    if (status === 'queue') return 'secondary';
    if (status === 'on-going') return 'primary';
    if (status === 'stuck') return 'danger';
    if (status === 'done') return 'success';
}

export default WorkspacePage;