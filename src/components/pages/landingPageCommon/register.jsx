import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'


function Register(props) {
    const [user, setUser] = useState({ username: '', email: '', password: '' })
    const [] = useState({ verifiedPassword: ''})

    const validateButton = () => {
        if (user.password !== user.verifiedPassword) return true
        if (user.password === '') return true
        return false
    }

    const handleRegister = async (event) => {
        event.preventDefault()

        const { data } = await axios.post('https://remindme-backend.herokuapp.com/auth/register/', user)
        console.log(data);
    }
    return (
        <React.Fragment>
            <Row className='justify-content-md-center mt-5'>
                <h1>Register Account</h1>
                <Form style={{ width: '75%' }}>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={user.username} onChange={event => setUser({ ...user, username: event.target.value })} type='text' name='username' placeholder='Username'></Form.Control>
                        <Form.Text className="text-muted">Username will be used to display account name</Form.Text >
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={user.email} onChange={event => setUser({ ...user, email: event.target.value })} type='email' name='email' placeholder='Email'></Form.Control>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text >
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={user.password} onChange={event => setUser({ ...user, password: event.target.value })} type='password' name='password' placeholder='Password'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control value={user.verifiedPassword} onChange={event => setUser({ ...user, verifiedPassword: event.target.value })} type='password' name='verifiedPassword' placeholder='Confirm Password'></Form.Control>
                        <Form.Text className="text-muted">Re-enter your password</Form.Text >
                    </Form.Group>

                    <Row className='mt-5'>
                        <Col xs lg="9" fluid>
                            <a href="" onClick={() => setUser({ username: '', email: '', password: '', verifiedPassword: '' })}>Cancel</a>
                        </Col>
                        <Col className='ml-2'>
                            <Button variant='primary' type="submit" disabled={validateButton()} onClick={event => handleRegister(event)}>Register</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </React.Fragment>
    );
}

export default Register;
