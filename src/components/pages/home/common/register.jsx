import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm(props) {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [conPassword, setConPassword] = useState('')


    return (
        <form action="">
            <p>Username / Name Displayed</p>
            <input
                type="text"
                name="username"
                value={user.username}
                id="username"
                placeholder="Username"
                onChange={e => setUser({ ...user, username: e.currentTarget.value })}
            />

            <p>Email</p>
            <input
                type="text"
                name="email"
                value={user.email}
                id="email"
                placeholder="Email"
                onChange={e => setUser({ ...user, email: e.currentTarget.value })}
            />

            <p>Password</p>
            <input
                type="password"
                name="password"
                value={user.password}
                id="password"
                placeholder="Password"
                onChange={e => setUser({ ...user, password: e.currentTarget.value })}
            />

            <p>Confirm Password</p>
            <input
                type="password"
                name="confirm-password"
                value={conPassword}
                id="confirm-password"
                placeholder="Confirm Password"
                onChange={e => setConPassword(e.currentTarget.value)}
            />

            <Link to="/">Cancel</Link>
            <button>Register</button>
        </form>
    );
}

export default RegisterForm;