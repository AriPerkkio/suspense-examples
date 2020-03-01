import React from 'react';

import UserCard from 'components/UserCard';
import MountToggle from 'components/MountToggle';
import { CodeBlockButton } from 'components/CodeBlock';

const ResourceAsProp = () => (
    <>
        <h1>Suspense</h1>

        <h2>Resource as prop</h2>
        <MountToggle initiallyMounted>
            <UserCard />
        </MountToggle>

        <div>
            <CodeBlockButton
                fileName='components/UserCard/UserCard.js'
                text='UserCard'
            />
            <CodeBlockButton
                fileName='components/UserCard/UserDetails.js'
                text='UserDetails'
            />
        </div>
    </>
);

export default ResourceAsProp;
