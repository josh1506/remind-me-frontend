import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'

import "react-datepicker/dist/react-datepicker.css";
import Sidebar from './workspace/sidebar';
import Status from './workspace/status';
import TaskTable from './workspace/taskTable';


function WorkspacePage(props) {
    const [user, setUser] = useState({ username: 'sample', email: 'sample@yahoo.com' })


    useState(async () => {
        try {
            const { data } = await axios.get(`https://remindme-backend.herokuapp.com/collab/workboard-list/${user.username}/1/`)
        } catch (error) {
        }
    }, [])

    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col >
                    <Status />
                    <TaskTable />

                </Col>
            </Row>
        </Container>
    );
}


export default WorkspacePage;