import React, { Suspense } from 'react';

import UserList from 'components/load-before-rendering/UserList';
import ErrorBoundary from 'components/common/ErrorBoundary';
import { CodeBlockButton } from 'components/common/CodeBlock';
import MountToggle from 'components/common/MountToggle';

const LoadBeforeRendering = () => (
    <>
        <h1>Suspense</h1>
        <h2>Load before rendering</h2>

        <MountToggle initiallyMounted>
            <Suspense fallback={<div>Loading users...</div>}>
                <ErrorBoundary fallback={<div>Error loading users...</div>}>
                    <UserList />
                </ErrorBoundary>
            </Suspense>
        </MountToggle>

        <div>
            <CodeBlockButton
                fileName='views/LoadBeforeRendering.js'
                text='Wrapper'
            />

            <CodeBlockButton
                fileName='components/load-before-rendering/UserList/UserList.js'
                text='UserList'
            />

            <CodeBlockButton
                fileName='utils/create-resource.js'
                text='create-resource'
            />
        </div>
    </>
);

export default LoadBeforeRendering;
