import React from 'react';

function Profile(props) {
    return (
        <div>
            <img src="" alt="Profile" />
            <button style={{ float: 'right' }}>Edit Profile</button>
            <button style={{ float: 'right' }}>Save</button>
            <h1>Name</h1>
            <p>First Name</p>
            <p>Data here</p>
            <input type="text" name="fname" id="fname" />
            <p>Last Name</p>
            <p>Data here</p>
            <input type="text" name="lname" id="lname" />
            <p>Email</p>
            <p>Data here</p>
            <input type="text" name="email" id="email" />
            <p>Gender</p>
            <p>Data here</p>
            <input type="text" name="gender" id="gender" />
            <p>Birth Date</p>
            <p>Data here</p>
            <input type="text" name="birth-date" id="birth-date" />
        </div>
    );
}

export default Profile;