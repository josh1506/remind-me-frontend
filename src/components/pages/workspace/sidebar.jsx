import React, { useState, useEffect } from 'react';
import { Col, Nav, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function Sidebar(props) {
    const [user, setUser] = useState({ username: 'sample', email: 'sample@yahoo.com' })
    const [workboard, setWorkboard] = useState([])

    useEffect(async () => {
        try {
            const { data } = await axios.get(`https://remindme-backend.herokuapp.com/collab/workboard-list/${user.username}/1/`)
            setWorkboard(data.data)
        } catch (error) {
        }
    }, [])

    return (
        <Col xs={2} className='mt-3'>
            <div className="row justify-content-end mr-1" activeKey="/home">
                <FontAwesomeIcon icon={faPlusCircle} size='lg' className='mb-2' style={{ cursor: 'pointer' }} />
            </div>
            <ListGroup defaultActiveKey>
                {workboard.map(board => <ListGroup.Item action href={`#${board.id}`} key={board.id}>{board.title}</ListGroup.Item>)}
            </ListGroup>
        </Col>
    );
}

export default Sidebar;