import React from 'react';

function NavBar(props) {
    return (
        <nav>
            <img src="" alt="logo" />
            <span>
                <span>
                    <a href="#">Reminder</a>
                    <select name="workspace" id="nav-workspace">
                        <option value="1">Sample 1</option>
                        <option value="2">Sample 2</option>
                        <option value="3">Sample 3</option>
                    </select>
                    <a href="#">Reminder</a>
                </span>
                <span>
                    <a href="#">Login</a>
                    <a href="#">Logout</a>
                </span>
            </span>
        </nav>
    );
}

export default NavBar;