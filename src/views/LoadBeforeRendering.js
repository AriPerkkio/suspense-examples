import React, { Suspense } from 'react';

import UserList from 'components/load-before-rendering/UserList';
import ErrorBoundary from 'components/common/ErrorBoundary';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { H1 } from 'components/common/Text';
import { Error, Loader } from 'components/common/Indicators';
import MountToggle from 'components/common/MountToggle';

const LoadBeforeRendering = () => (
    <>
        <H1>Load before rendering</H1>

        <MountToggle initiallyMounted>
            <Suspense fallback={<Loader />}>
                <ErrorBoundary fallback={<Error />}>
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
