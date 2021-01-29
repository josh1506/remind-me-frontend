import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassForm(props) {
    const [user, setUser] = useState({ email: '' })
    return (
        <React.Fragment>
            <div>
                <p>Please enter your valid email address to send request reset password</p>
            </div>
            <form action="">
                <div>
                    <p>email</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={e => setUser({ email: e.currentTarget.value })}
                    />

                </div>
                <button>Send</button>
                <Link to="/">Cancel</Link>
            </form>
        </React.Fragment>
    );
}

export default ForgotPassForm;