import React from 'react';
import { Row, Col, Form } from 'react-bootstrap'
import FormClass from './../../common/formClass';


class Register extends FormClass {
    render() {
        return (
            <React.Fragment>
                <Row className='justify-content-md-center mt-5'>
                    <h1>Register Account</h1>
                    <Form style={{ width: '75%' }}>

                        <Form.Group controlId="formBasicUsername">
                            {this.renderInput('username', 'Username')}
                            {this.renderText('Username will be used to display account name')}
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            {this.renderInput('email', 'Email', 'email')}
                            {this.renderText("We'll never share your email with anyone else.")}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            {this.renderInput('password', 'Password', 'password')}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            {this.renderInput('password', 'Confirm Password', 'password')}
                            {this.renderText('Re-enter your password')}
                        </Form.Group>

                        <Row className='mt-5'>
                            <Col xs lg="9" fluid>
                                <a href="">Cancel</a>
                            </Col>
                            <Col className='ml-2'>
                                {this.renderButton('Register', 'primary')}
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </React.Fragment>
        );
    }
}


export default Register;