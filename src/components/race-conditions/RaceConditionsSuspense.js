import React, { Suspense } from 'react';

import ErrorBoundary from 'components/common/ErrorBoundary';
import { H3 } from 'components/common/Text';
import { List, ListItem } from 'components/common/List';
import Api from 'api';
import { createCachedResource } from 'utils';
import { Error, Loader } from 'components/common/Indicators';

const cache = createCachedResource(Api.getUser);

const RaceConditionsSuspense = ({ id }) => (
    <Suspense fallback={<Loader>Loading user {id}...</Loader>}>
        <ErrorBoundary
            fallback={<Error>Error loading user {id}.</Error>}
            errorKey={id}>
            <UserDetails id={id} />
        </ErrorBoundary>
    </Suspense>
);

const UserDetails = ({ id }) => {
    const user = cache.read(id);

    return (
        <section>
            <H3>
                {user.name} ({user.id}) (props.id {id})
            </H3>
            <List>
                <ListItem>Username: {user.username}</ListItem>
                <ListItem>Email: {user.email}</ListItem>
            </List>
        </section>
    );
};

export default RaceConditionsSuspense;
