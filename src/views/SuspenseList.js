import React from 'react';

import UserList from 'components/suspense-list/UserList';
import { H1 } from 'components/common/Text';
import Select from 'components/common/Select';
import { FlexContainer } from 'components/common/Containers';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import CacheReset from 'components/common/CacheReset';
import { ApiRequests } from 'api';

const SuspenseList = () => (
    <>
        <H1>SuspenseList</H1>

        <FlexContainer>
            <Select
                label='revealOrder'
                options={['forwards', 'backwards', 'together']}>
                {revealOrder => {
                    const tailAvailable = revealOrder !== 'together';
                    const tailOptions = tailAvailable
                        ? ['collapsed', 'hidden']
                        : ['Unavailable {revealOrder: together}'];

                    return (
                        <Select label='tail' options={tailOptions}>
                            {tail => (
                                <MountToggle>
                                    <UserList
                                        revealOrder={revealOrder}
                                        tail={tailAvailable ? tail : undefined}
                                    />
                                </MountToggle>
                            )}
                        </Select>
                    );
                }}
            </Select>

            <ApiRequests />
        </FlexContainer>

        <CacheReset />

        <div>
            <CodeBlockButton
                fileName='components/suspense-list/UserList.js'
                text='UserList.js'
            />
            <CodeBlockButton
                fileName='components/suspense-list/UserDetails.js'
                text='UserDetails.js'
            />
        </div>
    </>
);

export default SuspenseList;
