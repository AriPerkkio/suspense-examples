import React from 'react';

import CustomSuspense from './CustomSuspense';
import ErrorBoundary from './ErrorBoundary';
import { Error, Loader } from 'components/common/Indicators';
import { H3 } from 'components/common/Text';
import { List, ListItem } from 'components/common/List';
import Api from 'api';

const UserDetails = () => (
    <CustomSuspense fallback={<Loader>Loading user</Loader>}>
        <ErrorBoundary fallback={<Error>Failed to load user</Error>}>
            <UserInfo />
        </ErrorBoundary>
    </CustomSuspense>
);

let resource;
const UserInfo = () => {
    if (!resource) {
        resource = Api.getUser(5)
            .then(response => (resource = response))
            .catch(error => (resource = error));
    }
    if (resource instanceof Promise) throw resource;
    if (resource instanceof Error) throw resource;

    return (
        <section>
            <H3>
                {resource.name} ({resource.id})
            </H3>
            <List>
                <ListItem>Username: {resource.username}</ListItem>
                <ListItem>Email: {resource.email}</ListItem>
            </List>
        </section>
    );
};

export default UserDetails;
