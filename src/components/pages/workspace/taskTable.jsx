import React, { useState, useEffect } from 'react';
import { Table, Row } from 'react-bootstrap'
import axios from 'axios'
import TaskBody from './taskBody';

function TaskTable(props) {
    const [taskGroup, setTaskGroup] = useState([])
    const [tableHeader] = useState([
        { id: 1, label: 'Task' },
        { id: 2, label: 'Status' },
        { id: 3, label: 'Comment' },
        { id: 4, label: 'People' },
        { id: 5, label: 'Due Date' },
    ])

    useEffect(async () => {
        try {
            const { data } = await axios.get('https://remindme-backend.herokuapp.com/collab/taskgroup-list/sample/1/1/')
            setTaskGroup(data.data)
        } catch (error) {

        }
    }, [])

    return (
        <Row className='mt-4'>
            {taskGroup.map(group =>
                <React.Fragment key={group.id}>
                    <h3>{group.title}</h3>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                {tableHeader.map(tableHead => <th key={tableHead.id}>{tableHead.label}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            <TaskBody taskGroupId={group.id} />
                        </tbody>
                    </Table>
                </React.Fragment>
            )}

        </Row>
    );
}

export default TaskTable;