import React from 'react';

import Api from 'api';
import { createResource } from 'utils';

// Start loading users as soon as UserList.js is imported
const resource = createResource(Api.getUsers);

const UserList = () => {
    const users = resource.read();

    return (
        <section>
            <h3>Users</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default UserList;
