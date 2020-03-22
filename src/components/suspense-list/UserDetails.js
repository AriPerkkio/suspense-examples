import React from 'react';

import { H3 } from 'components/common/Text';
import { List, ListItem } from 'components/common/List';

const UserDetails = ({ getResource }) => {
    const user = getResource();

    return (
        <section>
            <H3>
                {user.name} ({user.id})
            </H3>

            <List>
                <ListItem>Username: {user.username}</ListItem>
                <ListItem>Email: {user.email}</ListItem>
            </List>
        </section>
    );
};

export default UserDetails;
