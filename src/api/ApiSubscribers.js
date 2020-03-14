import React from 'react';

import Api from './Api';
import { useForceRender } from 'hooks';

const MAX_LIST_COUNT = 10;

const ApiSubscribers = () => {
    useForceRender(500);

    return <h3>Api subscribers count: {Api.subscribers.length}</h3>;
};

const ApiRequests = () => {
    useForceRender(500);

    const count = Api.requests.length;
    const displayCount = count > MAX_LIST_COUNT ? count - MAX_LIST_COUNT : 0;

    return (
        <>
            <h3
                onClick={() => (Api.requests = [])}
                style={{ cursor: 'pointer' }}>
                API requests, click to reset
            </h3>
            <ul>
                {count > MAX_LIST_COUNT && <li>...</li>}
                {Api.requests.slice(displayCount).map((url, key) => (
                    <li key={key}>{url}</li>
                ))}
            </ul>
        </>
    );
};

export default ApiSubscribers;
export { ApiRequests };
