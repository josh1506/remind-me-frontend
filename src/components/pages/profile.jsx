import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { Jumbotron, Row, Col, Nav, Button, Image, Form } from 'react-bootstrap'
import axios from 'axios'

function Profile(props) {
    const [user] = useState({ username: 'sample' })
    const [edit, setEdit] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [userDetail, setUserDetail] = useState({
        birth_date: "",
        email: "",
        first_name: "",
        gender: "",
        id: 0,
        last_name: "",
        profile_pic: "",
        user: ""
    })

    useEffect(async () => {
        try {
            const { data } = await axios.get(`https://remindme-backend.herokuapp.com/user/details/${user.username}/`)
            setUserDetail(data.data)
        } catch (error) {
        }
    }, [])

    const handleEdit = async () => {
        if (edit) {
            setEdit(!edit)
            await axios.put(`https://remindme-backend.herokuapp.com/user/details/${user.username}/`, userDetail)
        }

        setEdit(!edit)
    }

    const handleChangeDate = (date) => {
        date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

        setUserDetail({ ...userDetail, birth_date: date })
    }
    console.log(userDetail);
    return (
        <Jumbotron>
            <Row>
                <Col xs={3} className='mt-3'>
                    <Image className='w-100' src="https://project-management.com/wp-content/uploads/2017/11/robert-kiyosaki.png" roundedCircle />
                </Col>
                <Col>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Button onClick={() => handleEdit()}>{edit ? 'Save' : 'Edit Profile'}</Button>
                    </Nav>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h3>{userDetail.user}</h3>
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col>
                                    <Col>
                                        <h4>{edit ? <React.Fragment>
                                            <Form.Text>First Name</Form.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter First Name"
                                                value={userDetail.first_name}
                                                onChange={event => setUserDetail({ ...userDetail, first_name: event.target.value })}
                                            />
                                        </React.Fragment> : `First Name: ${userDetail.first_name}`}</h4>
                                        <h4>{edit ? <React.Fragment>
                                            <Form.Text>Last Name</Form.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Last Name"
                                                value={userDetail.last_name}
                                                onChange={event => setUserDetail({ ...userDetail, last_name: event.target.value })}
                                            />
                                        </React.Fragment> : `Last Name: ${userDetail.last_name}`}</h4>
                                        <h4>Email: {userDetail.email}</h4>
                                    </Col>
                                </Col>
                                <Col>
                                    <Col>
                                        <h4>{edit ? <React.Fragment>
                                            <Form.Text>Gender</Form.Text>
                                            <Form.Control
                                                as="select"
                                                placeholder="Enter Gender"
                                                value={userDetail.gender}
                                                onChange={event => setUserDetail({ ...userDetail, gender: event.target.value })}
                                            >
                                                <option>male</option>
                                                <option>female</option>
                                            </Form.Control>
                                        </React.Fragment> : `Gender: ${userDetail.gender}`}</h4>
                                        <h4>{edit ? <React.Fragment>
                                            <Form.Text>Birthdate</Form.Text>
                                            <Form.Text>(fix not accepting birth_date)</Form.Text>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={date => handleChangeDate(date)}
                                                value={userDetail.birth_date} />
                                        </React.Fragment> : `Birthdate: ${userDetail.birth_date}`}</h4>
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