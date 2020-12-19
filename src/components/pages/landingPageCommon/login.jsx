import React from 'react';
import { Row, Col, Image, Form } from 'react-bootstrap'
import FormClass from '../../common/formClass';


class Login extends FormClass {
    render() {
        return (
            <React.Fragment>
                <Row className='justify-content-md-center mt-5'>
                    <Image href="#home" src='https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.15752-9/131931718_157260752821453_8623645780151052973_n.png?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_eui2=AeG2fx8500kEy_cqBMGeHvQ4waKzDgjaFtbBorMOCNoW1u8vHCQ4ETcFexSIEO6H1lycqqb_7ccFRca0MNWzFRF7&_nc_ohc=xIK_xf9KeKEAX9U4C4F&_nc_ht=scontent.fcrk1-2.fna&oh=6136d3b442fbc6007faaa46c679f9627&oe=6002E73C' style={{ maxHeight: 100 }}></Image>
                </Row>
                <Row className='justify-content-md-center'>
                    <h1>RemindMe</h1>
                </Row>
                <Row className='justify-content-md-center mt-5'>
                    <Form style={{ width: '75%' }}>

                        <Form.Group controlId="formBasicEmail">
                            {this.renderInput('email', 'Email', 'email')}
                            {this.renderText("We'll never share your email with anyone else.")}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            {this.renderInput('password', 'Password', 'password')}
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            {this.renderCheckBox('checkbox', 'Remember me')}
                        </Form.Group>

                        <Row>
                            <Col xs lg="9" fluid>
                                {this.renderButton('Login with Facebook', 'primary', true)}
                            </Col>
                            <Col className='ml-3'>
                                {this.renderButton('Submit', 'primary')}
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row className='mt-3 text-center'>
                    <Col>
                        <a className='pr-5' href='#'>Register Account</a>
                    </Col>
                    <Col>
                        <a className='pl-5' href='#'>Forgot Password</a>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Login;

