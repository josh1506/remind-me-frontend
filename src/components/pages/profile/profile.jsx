import React from 'react';

function Profile(props) {
    return (
        <div>
            <img src="" alt="Profile" />
            <div>
                <button style={{ float: 'right' }}>Edit Profile</button>
                <h1>Name</h1>
                <h3>First Name</h3>
                <h3>Last Name</h3>
                <h3>Email</h3>
                <h3>Gender</h3>
                <h3>Birth Date</h3>
            </div>
        </div>
    );
}

export default Profile;