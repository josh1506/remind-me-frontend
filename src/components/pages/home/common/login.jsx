import React from 'react';
import { Link } from 'react-router-dom'

function LoginForm(props) {
    return (
        <form action="">
            <img src="" alt="logo" />
            <h2>RemindMe</h2>
            <p>Email</p>
            <input type="text" name="email" placeholder="Email" id="home-email" />
            <p>Password</p>
            <input type="password" name="password" placeholder="Password" id="home-password" />
            <button>Continue with Facebook</button>
            <button>Login</button>
            <Link to="/register">Register Account</Link>
            <Link to="/forgot">Forgot Password</Link>
        </form>
    );
}

export default LoginForm;