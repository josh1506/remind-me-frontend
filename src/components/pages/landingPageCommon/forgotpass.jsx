import React from 'react';
import { Row, Col, Form } from 'react-bootstrap'
import FormClass from './../../common/formClass';


class ForgotPass extends FormClass {
    render() {
        return (
            <React.Fragment>
                <Row className='justify-content-md-center mt-5'>
                    <h1>Forgot Password</h1>
                    <p>Please enter your valid email address to send reset password</p>
                </Row>
                <Row className='justify-content-md-center mt-5'>
                    <Form style={{ width: '75%' }}>

                        <Form.Group controlId="formBasicEmail">
                            {this.renderInput('email', 'Email', 'email')}
                            {this.renderText("We'll never share your email with anyone else.")}
                        </Form.Group>

                        <Row className='mb-4'>
                            <Col xs block fluid>
                                {this.renderButton('Send Password Reset', 'primary', true)}
                            </Col>
                        </Row>
                        <a href="">Cancel</a>
                    </Form>
                </Row>
            </React.Fragment>
        );
    }
}


export default ForgotPass;