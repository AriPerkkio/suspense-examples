import React, { useReducer, Suspense } from 'react';

import UserDetails from './UserDetails';
import ErrorBoundary from 'components/common/ErrorBoundary';
import Api from 'api';
import { createResource } from 'utils';

const fetchUser = id => createResource(Api.getUser(id));
const initializeState = () => ({ id: 1, resource: fetchUser(1) });
const reducer = (_, id) => ({ id, resource: fetchUser(id) });

const UserCard = () => {
    const [{ id, resource }, setResource] = useReducer(
        reducer,
        null,
        initializeState
    );

    return (
        <>
            <h2>UserCard</h2>

            <input
                type='number'
                value={id}
                onChange={e => setResource(e.target.value)}
            />

            <Suspense fallback={<div>Loading user {id}...</div>}>
                <ErrorBoundary
                    fallback={<div>Error loading user {id}.</div>}
                    errorKey={id}>
                    <UserDetails resource={resource} />
                </ErrorBoundary>
            </Suspense>
        </>
    );
};

UserCard.displayName = 'UserCard';
export default UserCard;
