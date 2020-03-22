import React, { Suspense, SuspenseList } from 'react';

import UserDetails from './UserDetails';
import { Loader } from 'components/common/Indicators';
import Api from 'api';
import { createCachedResource } from 'utils';

const cache = createCachedResource(Api.getUser);

const UserList = ({ revealOrder, tail }) => (
    <SuspenseList revealOrder={revealOrder} tail={tail}>
        <Suspense fallback={<Loader>Loading user 2...</Loader>}>
            <UserDetails getResource={() => cache.read(2)} />
        </Suspense>

        <Suspense fallback={<Loader>Loading user 3...</Loader>}>
            <UserDetails getResource={() => cache.read(3)} />
        </Suspense>

        <Suspense fallback={<Loader>Loading user 4...</Loader>}>
            <UserDetails getResource={() => cache.read(4)} />
        </Suspense>

        <Suspense fallback={<Loader>Loading user 5...</Loader>}>
            <UserDetails getResource={() => cache.read(5)} />
        </Suspense>
    </SuspenseList>
);

export default UserList;
