import React, { Suspense } from 'react';

import ErrorBoundary from 'components/common/ErrorBoundary';
import Api from 'api';
import { createCachedResource } from 'utils';

const cache = createCachedResource(Api.getUser.bind(Api));
const addDelayMs = id => 1000 * parseInt(id);

const RaceConditionsSuspense = ({ id }) => (
    <Suspense fallback={<div>Loading user {id}...</div>}>
        <ErrorBoundary
            fallback={<div>Error loading user {id}.</div>}
            errorKey={id}>
            <UserDetails id={id} />
        </ErrorBoundary>
    </Suspense>
);

const UserDetails = ({ id }) => {
    const user = cache.read(id, addDelayMs(id));

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

export default RaceConditionsSuspense;
