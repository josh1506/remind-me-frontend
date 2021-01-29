import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import ForgotPassForm from './common/forgot';
import LoginForm from './common/login';
import RegisterForm from './common/register';

function HomePage(props) {
    return (
        <div>
            <img src="" alt="photo" />
            <Switch>
                <Route path='/register' component={RegisterForm} />
                <Route path='/forgot' component={ForgotPassForm} />
                <Route path='/' exact component={LoginForm} />
                <Redirect to='/not-found' />
            </Switch>
        </div>
    );
}

export default HomePage;