import React from 'react';

import UserList from 'components/suspense-list/UserList';
import Select from 'components/common/Select';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import CacheReset from 'components/common/CacheReset';
import { ApiRequests } from 'api';

const SuspenseList = () => (
    <>
        <h1>SuspenseList</h1>

        <Select options={['forwards', 'backwards', 'together']}>
            {revealOrder => (
                <MountToggle>
                    <UserList revealOrder={revealOrder} />
                </MountToggle>
            )}
        </Select>

        <CacheReset />

        <div style={{ marginTop: '2rem' }}>
            <CodeBlockButton
                fileName='components/suspense-list/UserList.js'
                text='UserList.js'
            />
            <CodeBlockButton
                fileName='components/suspense-list/UserDetails.js'
                text='UserDetails.js'
            />
        </div>

        <ApiRequests />
    </>
);

export default SuspenseList;
