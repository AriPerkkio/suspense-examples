import React, { useReducer, useEffect } from 'react';

import { H3 } from 'components/common/Text';
import { List, ListItem } from 'components/common/List';
import { Error, Loader } from 'components/common/Indicators';
import Api from 'api';

const reducer = (state, partial) => ({ ...state, ...partial });
const initialState = { user: null, isLoading: false, error: false };

const UserCard = ({ id }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user, isLoading, error } = state;

    useEffect(() => {
        dispatch({ isLoading: true, error: false });

        Api.getUser(id)
            .then(response => dispatch({ user: response, isLoading: false }))
            .catch(() => dispatch({ error: true, isLoading: false }));
    }, [id]);

    if (isLoading) return <Loader>Loading user {id}...</Loader>;
    if (error || !user) return <Error>Error loading user {id}.</Error>;

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

export default UserCard;
