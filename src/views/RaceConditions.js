import React from 'react';

import {
    RaceConditionsHooks,
    RaceConditionsSuspense,
} from 'components/race-conditions';
import Input from 'components/common/Input';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { ApiRequests } from 'api';

const RaceConditions = () => (
    <>
        <h1>Race conditions</h1>

        <h2>With hooks</h2>
        <MountToggle>
            <Input>{({ value }) => <RaceConditionsHooks id={value} />}</Input>
        </MountToggle>

        <h2>With suspense</h2>
        <MountToggle>
            <Input>
                {({ value }) => <RaceConditionsSuspense id={value} />}
            </Input>
        </MountToggle>

        <div style={{ marginTop: '2rem' }}>
            <CodeBlockButton
                fileName='components/race-conditions/RaceConditionsHooks.js'
                text='With Hooks'
            />
            <CodeBlockButton
                fileName='components/race-conditions/RaceConditionsSuspense.js'
                text='With Suspense'
            />

            <CodeBlockButton
                fileName='utils/create-cached-resource.js'
                text='create-cached-resource'
            />
        </div>

        <ApiRequests />
    </>
);

export default RaceConditions;
