import React, { Suspense, SuspenseList } from 'react';

import UserDetails from './UserDetails';
import Api from 'api';
import { createCachedResource } from 'utils';

const cache = createCachedResource(Api.getUser);

const UserList = ({ revealOrder }) => (
    <SuspenseList revealOrder={revealOrder}>
        <Suspense fallback={<div>Loading user 4...</div>}>
            <UserDetails getResource={() => cache.read(4)} />
        </Suspense>

        <Suspense fallback={<div>Loading user 5...</div>}>
            <UserDetails getResource={() => cache.read(5)} />
        </Suspense>

        <Suspense fallback={<div>Loading user 6...</div>}>
            <UserDetails getResource={() => cache.read(6)} />
        </Suspense>

        <Suspense fallback={<div>Loading user 7...</div>}>
            <UserDetails getResource={() => cache.read(7)} />
        </Suspense>
    </SuspenseList>
);

export default UserList;
