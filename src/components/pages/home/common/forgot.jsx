import React from 'react';

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
                <a href="#">Cancel</a>
            </form>
        </React.Fragment>
    );
}

export default ForgotPassForm;