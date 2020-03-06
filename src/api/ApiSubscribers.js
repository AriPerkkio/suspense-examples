import React from 'react';

import Api from './Api';
import { useForceRender } from 'hooks';

const ApiSubscribers = () => {
    useForceRender(500);

    return <h3>Api subscribers count: {Api.subscribers.length}</h3>;
};

const ApiRequests = () => {
    useForceRender(500);

    const count = Api.requests.length;
    const displayCount = count > 5 ? count - 5 : 0;

    return (
        <>
            <h3 onClick={() => (Api.requests = [])}>
                API requests, click to reset
            </h3>
            <ul>
                {count > 5 && <li>...</li>}
                {Api.requests.slice(displayCount).map((url, key) => (
                    <li key={key}>{url}</li>
                ))}
            </ul>
        </>
    );
};

export default ApiSubscribers;
export { ApiRequests };
