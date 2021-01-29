import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassForm(props) {
    return (
        <React.Fragment>
            <div>
                <p>Please enter your valid email address to send request reset password</p>
            </div>
            <form action="">
                <div>
                    <p>email</p>
                    <input type="email" name="email" id="email" placeholder="Email" />

                </div>
                <button>Send</button>
                <Link href="/login">Cancel</Link>
            </form>
        </React.Fragment>
    );
}

export default ForgotPassForm;