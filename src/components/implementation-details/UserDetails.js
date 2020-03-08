import React from 'react';

import CustomSuspense from './CustomSuspense';
import ErrorBoundary from './ErrorBoundary';
import Api from 'api';

const UserDetails = () => (
    <CustomSuspense fallback={<div>Loading user</div>}>
        <ErrorBoundary fallback={<div>Failed to load user</div>}>
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
            <h3>
                {resource.name} ({resource.id})
            </h3>
            <ul>
                <li>Username: {resource.username}</li>
                <li>Email: {resource.email}</li>
            </ul>
        </section>
    );
};

export default UserDetails;
