import React from 'react';

import { CodeBlockButton } from 'components/common/CodeBlock';

const RaceConditions = () => (
    <>
        <CodeBlockButton
            fileName='components/implementation-details/UserDetails.js'
            text='UserDetails'
        />
        <CodeBlockButton
            fileName='components/implementation-details/ErrorBoundary.js'
            text='ErrorBoundary'
        />
        <CodeBlockButton
            fileName='components/implementation-details/CustomSuspense.js'
            text='CustomSuspense'
        />
    </>
);

export default RaceConditions;
