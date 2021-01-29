import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function LoginForm(props) {
    const [user, setUser] = useState({ email: '', password: '' })
    return (
        <form action="">
            <img src="" alt="logo" />
            <h2>RemindMe</h2>
            <p>Email</p>
            <input
                type="text"
                name="email"
                placeholder="Email"
                id="home-email"
                value={user.email}
                onChange={e => setUser({ ...user, email: e.currentTarget.value })}
            />

            <p>Password</p>
            <input
                type="password"
                name="password"
                placeholder="Password"
                id="home-password"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.currentTarget.value })}
            />

            <button>Continue with Facebook</button>
            <button>Login</button>
            <Link to="/register">Register Account</Link>
            <Link to="/forgot">Forgot Password</Link>
        </form>
    );
}

export default LoginForm;