import React from 'react';
import HomePage from './pages/home/homePage';
import Profile from './pages/profile/profile';
import Workspace from './pages/workspace/workspace';
import Todo from './pages/reminder/todo';

function Body(props) {
    return (
        <main>
            <HomePage />
            {/* <Todo /> */}
            {/* <Profile /> */}
            {/* <Workspace /> */}
        </main>
    );
}

export default Body;