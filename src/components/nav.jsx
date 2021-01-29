import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav>
            <Link to='/'>
                <img src="" alt="logo" />
            </Link>
            <span>
                <span>
                    <Link to="/reminder">Reminder</Link>
                    <select name="workspace" id="nav-workspace">
                        <option value="1">Sample 1</option>
                        <option value="2">Sample 2</option>
                        <option value="3">Sample 3</option>
                    </select>
                    <Link to="/profile">Profile</Link>
                </span>
                <span>
                    <Link to="/login">Login</Link>
                    <Link to="/logout">Logout</Link>
                </span>
            </span>
        </nav>
    );
}

export default NavBar;