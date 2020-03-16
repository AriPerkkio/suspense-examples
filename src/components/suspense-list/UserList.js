import React, { Suspense, SuspenseList } from 'react';

import UserDetails from './UserDetails';
import Api from 'api';
import { createCachedResource } from 'utils';

const cache = createCachedResource(Api.getUser);

const UserList = ({ revealOrder, tail }) => (
    <SuspenseList revealOrder={revealOrder} tail={tail}>
        <Suspense fallback={<div>Loading user 2...</div>}>
            <UserDetails getResource={() => cache.read(2)} />
        </Suspense>

        <Suspense fallback={<div>Loading user 3...</div>}>
            <UserDetails getResource={() => cache.read(3)} />
        </Suspense>

        <Suspense fallback={<div>Loading user 4...</div>}>
            <UserDetails getResource={() => cache.read(4)} />
        </Suspense>

        <Suspense fallback={<div>Loading user 5...</div>}>
            <UserDetails getResource={() => cache.read(5)} />
        </Suspense>
    </SuspenseList>
);

export default UserList;
