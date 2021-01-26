import React from 'react';

function RegisterForm(props) {
    return (
        <form action="">
            <p>Username / Name Displayed</p>
            <input type="text" name="username" id="username" placeholder="Username" />
            <p>Email</p>
            <input type="text" name="email" id="email" placeholder="Email" />
            <p>Password</p>
            <input type="password" name="password" id="password" placeholder="Password" />
            <p>Confirm Password</p>
            <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
            <a href="#">Cancel</a>
            <button>Register</button>
        </form>
    );
}

export default RegisterForm;