import React, { useReducer, useEffect } from 'react';

import Api from 'api';

const reducer = (state, partial) => ({ ...state, ...partial });
const initialState = { user: null, isLoading: false, error: false };
const addDelayMs = id => 1000 * parseInt(id);

const UserCard = ({ id }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user, isLoading, error } = state;

    useEffect(() => {
        dispatch({ isLoading: true, error: false });

        Api.getUser(id, addDelayMs(id))
            .then(response => dispatch({ user: response, isLoading: false }))
            .catch(() => dispatch({ error: true, isLoading: false }));
    }, [id]);

    if (isLoading) return <div>Loading user {id}</div>;
    if (error || !user) return <div>Error fetching user {id}</div>;

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

UserCard.displayName = 'UserCard';
export default UserCard;
