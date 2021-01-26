import React from 'react';
import ForgotPassForm from '../../common/forgot';
import LoginForm from './../../common/login';
import RegisterForm from './../../common/register';

function HomePage(props) {
    return (
        <div>
            <img src="" alt="photo" />
            <LoginForm />
            <RegisterForm />
            <ForgotPassForm />
        </div>
    );
}

export default HomePage;