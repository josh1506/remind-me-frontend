import React, { useState, useEffect, useRef } from 'react';
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faUserCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, Col, Form, Overlay, Popover } from 'react-bootstrap'
import axios from 'axios'


function TaskBody({ taskGroupId }) {
    const leader = true
    const [startDate, setStartDate] = useState(new Date());
    const [task, setTask] = useState([])
    const [getComment, setGetComment] = useState([])
    const [getPeople, setGetPeople] = useState([])
    const [addComment, setAddComment] = useState({ comment: "" })

    const [showComment, setShowComment] = useState(false);
    const [targetComment, setTargetComment] = useState(null);
    const refComment = useRef(null);

    const [showPeople, setShowPeople] = useState(false);
    const [targetPeople, setTargetPeople] = useState(null);
    const refPeople = useRef(null);


    const handlePeopleButton = (event, taskItem) => {
        !showPeople ? setGetPeople([...taskItem.people]) : setGetPeople([])
        setShowComment(false);
        setGetComment([])
        setShowPeople(!showPeople);
        setTargetPeople(event.target);
    };

    const handleCommentButton = (event, taskItem) => {
        !showComment ? handleGetComments(taskItem) : setGetComment([])
        setShowPeople(false);
        setGetPeople([])
        setShowComment(!showComment);
        setTargetComment(event.target);
    };

    const handleDeleteButton = async (taskItem) => {
        const updatedComments = getComment.filter(comment => comment.id !== taskItem.id)
        setGetComment(updatedComments)
        const { data } = await axios.delete(`https://remindme-backend.herokuapp.com/collab/task-comment-detail/sample/1/1/1/1/${taskItem.id}/`)
    }


    useEffect(async () => {
        try {
            const { data } = await axios.get(`https://remindme-backend.herokuapp.com/collab/task-list/sample/1/1/${taskGroupId}/`)
            setTask(data.data)
        } catch (error) {
        }
    }, [])

    const handleUpdate = async (taskItem) => {
        try {
            await axios.put(`https://remindme-backend.herokuapp.com/collab/task-detial/sample/1/1/${taskGroupId}/${taskItem.id}/`, taskItem)
        } catch (error) {
        }
    }

    const handleGetComments = async (taskItem) => {
        try {
            const { data } = await axios.get(`https://remindme-backend.herokuapp.com/collab/task-comment-list/sample/1/1/1/${taskItem.id}/`)
            setGetComment(data.data)
        } catch (err) {

        }
    }

    const handleAddComment = async () => {
        try {
            setGetComment([...getComment, addComment])
            setAddComment({ comment: '' })
            await axios.post(`https://remindme-backend.herokuapp.com/collab/task-comment-list/sample/1/1/1/1/${addComment.id}/`, addComment)
            console.log('craeted comment');
        } catch (error) {

        }
    }

    const handleChangeStatus = (status, taskItem) => {
        taskItem.status = status.currentTarget.value
        const index = task.indexOf(taskItem)
        const items = [...task]
        items[index] = taskItem
        setTask([...items])

        handleUpdate(taskItem)
    }

    const handleChangeDate = (date, taskItem) => {
        taskItem.due_date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        const index = task.indexOf(taskItem)
        const items = [...task]
        items[index] = taskItem
        setTask([...items])

        handleUpdate(taskItem)
    }

    const handleTaskChange = (event, taskItem) => {
        taskItem.task = event.currentTarget.value
        const index = task.indexOf(taskItem)
        const items = [...task]
        items[index] = taskItem
        setTask([...items])
    }

    const handleBlur = (taskItem) => {
        handleUpdate(taskItem)
    }

    return (
        <React.Fragment>
            {task.map(taskItem =>
                <tr key={taskItem.id}>
                    <td>{leader ?
                        <Form.Control
                            type="text"
                            placeholder="Enter task"
                            value={taskItem.task}
                            onBlur={handleBlur(taskItem)}
                            onChange={event => handleTaskChange(event, taskItem)}
                        /> : taskItem.task}</td>
                    <td>
                        <Form.Control
                            as="select"
                            custom className={`text-white bg-${getStatus(`${taskItem.status}`)}`}
                            value={`${taskItem.status}`}
                            onChange={(event) => handleChangeStatus(event, taskItem)}>
                            <option className='bg-white text-dark'>queue</option>
                            <option className='bg-white text-dark'>on-going</option>
                            <option className='bg-white text-dark'>stuck</option>
                            <option className='bg-white text-dark'>done</option>
                        </Form.Control>
                    </td>
                    <td>
                        <FontAwesomeIcon
                            style={{ cursor: 'pointer' }}
                            icon={faCommentDots}
                            size='lg'
                            ref={refComment}
                            onClick={event => handleCommentButton(event, taskItem)}
                        /></td>
                    <td>
                        <FontAwesomeIcon
                            style={{ cursor: 'pointer' }}
                            icon={faUserCircle}
                            size='lg'
                            ref={refPeople}
                            onClick={event => handlePeopleButton(event, taskItem)}
                        />
                    </td>
                    <td><DatePicker
                        selected={startDate}
                        onChange={date => handleChangeDate(date, taskItem)}
                        value={taskItem.due_date} /></td>
                </tr>
            )}

            <Overlay
                show={showComment}
                target={targetComment}
                placement="bottom"
                container={refComment.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Title as="h3">Comments:</Popover.Title>
                    <Col>
                        <Form.Control type='text' value={addComment.comment} onChange={event => setAddComment({ comment: event.target.value })} size='sm' placeholder='Input comment' />
                        <Button className='mt-2' onClick={handleAddComment}>Send</Button>
                    </Col>
                    {getComment.length > 0 ?
                        getComment.map(taskItem => <Popover.Content key={taskItem.id}>
                            <strong>{taskItem.comment}</strong>
                            <br />
                            - (fix backend for getting username).
                            <FontAwesomeIcon
                                style={{ cursor: 'pointer' }}
                                icon={faTrashAlt}
                                size='lg'
                                ref={refPeople}
                                className='ml-1 text-danger'
                                onClick={() => handleDeleteButton(taskItem)}
                            />
                            <hr />
                        </Popover.Content>)
                        : <Popover.Content>0 comments</Popover.Content>
                    }
                </Popover>
            </Overlay>

            <Overlay
                show={showPeople}
                target={targetPeople}
                placement="bottom"
                container={refPeople.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Title as="h3">People:</Popover.Title>
                    {getPeople.length > 0 ?
                        getPeople.map(user => <Popover.Content as="h6" key={user.id}>{user.username}</Popover.Content>)
                        : <Popover.Content>No user assigned</Popover.Content>
                    }
                </Popover>
            </Overlay>
        </React.Fragment >
    );
}

const getStatus = (status) => {
    if (status === 'queue') return 'secondary';
    if (status === 'on-going') return 'primary';
    if (status === 'stuck') return 'danger';
    if (status === 'done') return 'success';
}


export default TaskBody;