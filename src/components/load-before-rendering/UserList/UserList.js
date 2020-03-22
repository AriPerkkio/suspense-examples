import React from 'react';

import Api from 'api';
import { createResource } from 'utils';
import { H2 } from 'components/common/Text';
import { List, ListItem } from 'components/common/List';

// Start loading users as soon as UserList.js is imported
const resource = createResource(Api.getUsers);

const UserList = () => {
    const users = resource.read();

    return (
        <section>
            <H2>Users</H2>

            <List>
                {users.map(user => (
                    <ListItem key={user.id}>{user.name}</ListItem>
                ))}
            </List>
        </section>
    );
};

export default UserList;
