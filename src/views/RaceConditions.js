import React from 'react';

import {
    RaceConditionsHooks,
    RaceConditionsSuspense,
} from 'components/race-conditions';
import Input from 'components/common/Input';
import MountToggle from 'components/common/MountToggle';
import { H1, H2 } from 'components/common/Text';
import { FlexContainer } from 'components/common/Containers';
import { CodeBlockButton } from 'components/common/CodeBlock';
import CacheReset from 'components/common/CacheReset';
import { ApiRequests } from 'api';

const RaceConditions = () => (
    <>
        <H1>Race conditions</H1>

        <FlexContainer>
            <div>
                <H2>With hooks</H2>
                <MountToggle>
                    <Input>{id => <RaceConditionsHooks id={id} />}</Input>
                </MountToggle>
            </div>

            <div>
                <H2>With suspense</H2>
                <MountToggle>
                    <Input>{id => <RaceConditionsSuspense id={id} />}</Input>
                </MountToggle>

                <CacheReset />
            </div>
        </FlexContainer>

        <div>
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
