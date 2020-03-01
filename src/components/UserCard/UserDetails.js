import React from 'react';

const UserDetails = ({ resource }) => {
    const user = resource.read();
    const { id, name, username, email } = user;

    return (
        <section>
            <h3>
                {name} ({id})
            </h3>
            <ul>
                <li>Username: {username}</li>
                <li>Email: {email}</li>
            </ul>
        </section>
    );
};

UserDetails.displayName = 'UserDetails';
export default UserDetails;
