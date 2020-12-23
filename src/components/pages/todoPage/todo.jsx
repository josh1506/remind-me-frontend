import React, { useState, useEffect } from 'react';
import { Container, Modal, Button, Form, Table, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function Todo(props) {
    let lastId = 0
    const [todo, setTodo] = useState([])
    const [newTask, setNewTask] = useState({ title: '', complete: false })
    const [editTask, setEditTask] = useState({ id: 0, title: '', complete: false, date_created: '0000-00-00T00:00:00.000000Z' })
    const [showCreate, setShowCreate] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [edit, setEdit] = useState(false)

    // Server call functions
    useEffect(async () => {
        const { data } = await axios.get('https://remindme-backend.herokuapp.com/todo/list/sample/')
        setTodo(data.data)
    }, [])

    const handleUpdate = async (task) => {
        try {
            await axios.put(`https://remindme-backend.herokuapp.com/todo/list/sample/${task.id}/`, task)
        } catch (error) {
        }
    }

    const handleCreateTask = async () => {
        try {
            setTodo([...todo, newTask])
            handleCloseCreate()
            await axios.post('https://remindme-backend.herokuapp.com/todo/list/sample/', newTask)
            setNewTask({ title: '', complete: false })
        } catch (error) {
        }
    }

    const handleDeleteTask = async (task) => {
        try {
            await axios.delete(`https://remindme-backend.herokuapp.com/todo/list/sample/${task.id}/`)
        } catch (error) {
        }
    }


    // Modal functions
    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);

    const handleCloseEdit = () => {
        setEditTask({ id: 0, title: '', complete: false, date_created: '0000-00-00T00:00:00.000000Z' })
        setShowEdit(false)
    };

    const handleShowEdit = (task) => {
        setEditTask(task)
        setShowEdit(true)
    };

    const handleCloseDelete = () => {
        setEditTask({ id: 0, title: '', complete: false, date_created: '0000-00-00T00:00:00.000000Z' })
        setShowDelete(false)
    };

    const handleShowDelete = (task) => {
        setEditTask(task)
        setShowDelete(true)
    };


    // Functions
    const handleEditTask = (event, task) => {
        const index = todo.indexOf(task)
        const tasks = [...todo]
        task.title = event.currentTarget.value
        tasks[index] = task
        setTodo([...tasks])
    }

    const handleEdit = () => {
        handleUpdate(editTask)
        handleCloseEdit()

        const index = todo.indexOf()
        const tasks = [...todo]
        tasks.map(task =>
            task.id == editTask.id ? task.title = editTask.title : task
        )
        setTodo([...tasks])

        setEditTask({ id: 0, title: '', complete: false, date_created: '0000-00-00T00:00:00.000000Z' })
    }


    const handleDelete = () => {
        handleDeleteTask(editTask)
        handleCloseDelete()
        const tasks = todo.filter(task => task.id !== editTask.id)
        setTodo([...tasks])

        setEditTask({ id: 0, title: '', complete: false, date_created: '0000-00-00T00:00:00.000000Z' })
    }

    const handleSave = () => {
        if (edit) todo.map(task => handleUpdate(task))
        setEdit(!edit)
    }

    const handleClick = (task) => {
        const index = todo.indexOf(task)
        const tasks = [...todo]
        task.complete = !task.complete
        tasks[index] = task
        setTodo([...tasks])

        handleUpdate(task)
    }

    return (
        <React.Fragment>
            <div className="nav justify-content-end">
                <button className='border border-light'>
                    <FontAwesomeIcon icon={faPlusCircle} size='lg' onClick={handleShowCreate} />
                </button>
                <Button className='mb-1 ml-2' onClick={handleSave}>{edit ? 'Save All' : 'Edit All'}</Button>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Task</th>
                        <th className="nav justify-content-end pr-5">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map(task =>
                        <tr key={task.id}>
                            <td>{++lastId}</td>
                            <td>{edit ?
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder={task.title}
                                    onBlur={event => handleEditTask(event, task)}>
                                </Form.Control>
                                : task.title}
                            </td>
                            <td className="nav justify-content-end">
                                <Form.Check
                                    checked={task.complete}
                                    className='pr-1'
                                    onChange={() => handleClick(task)}
                                />
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    size='lg'
                                    onClick={() => handleShowEdit(task)} style={{ cursor: 'pointer' }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimesCircle}
                                    size='lg'
                                    onClick={() => handleShowDelete(task)} style={{ cursor: 'pointer' }}
                                    className='text-danger ml-1'
                                />
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>

            <Modal
                show={showCreate}
                onHide={handleCloseCreate}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Creating new Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Control placeholder='Enter Task Name' value={newTask.title} onChange={event => setNewTask({ ...newTask, 'title': event.target.value })} />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCreate}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCreateTask}>Create</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showEdit}
                onHide={handleCloseCreate}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit: {editTask.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Control placeholder='Enter Task Name' value={editTask.title} onChange={event => setEditTask({ ...editTask, 'title': event.target.value })} />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>Save</Button>
                </Modal.Footer>
            </Modal>


            <Modal
                show={showDelete}
                onHide={handleCloseDelete}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete: {editTask.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to delete {editTask.title}?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDelete(false)}>Close</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default Todo;