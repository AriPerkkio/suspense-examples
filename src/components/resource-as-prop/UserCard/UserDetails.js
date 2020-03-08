import React from 'react';

const UserDetails = ({ resource }) => {
    const user = resource.read();

    return (
        <section>
            <h3>
                {user.name} ({user.id})
            </h3>
            <ul>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
            </ul>
        </section>
    );
};

export default UserDetails;
