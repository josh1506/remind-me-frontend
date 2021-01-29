import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/home/homePage';
import Profile from './pages/profile/profile';
import Workspace from './pages/workspace/workspace';
import Todo from './pages/reminder/todo';

function Body(props) {
    return (
        <main>
            <Switch>
                <Route path='/reminder' component={Todo} />
                <Route path='/profile' component={Profile} />
                <Route path='/workspace' component={Workspace} />
                <Redirect from='/home' to='/' />
                <Route path='/' exact component={HomePage} />
                <Redirect to='/not-found' />
            </Switch>
        </main>
    );
}

export default Body;