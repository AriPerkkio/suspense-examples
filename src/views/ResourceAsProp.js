import React from 'react';

import UserCard from 'components/resource-as-prop/UserCard';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';

const ResourceAsProp = () => (
    <>
        <h1>Suspense</h1>

        <h2>Resource as prop</h2>
        <MountToggle initiallyMounted>
            <UserCard />
        </MountToggle>

        <div>
            <CodeBlockButton
                fileName='components/resource-as-prop/UserCard/UserCard.js'
                text='UserCard'
            />
            <CodeBlockButton
                fileName='components/resource-as-prop/UserCard/UserDetails.js'
                text='UserDetails'
            />
        </div>
    </>
);

export default ResourceAsProp;
