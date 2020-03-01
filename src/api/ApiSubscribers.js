import React from 'react';

import Api from './Api';
import { useForceRender } from 'hooks';

const ApiSubscribers = () => {
    useForceRender(500);

    return <h3>Api subscribers count: {Api.subscribers.length}</h3>;
};
export default ApiSubscribers;
