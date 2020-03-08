import { lazy } from 'react';

import Main from './Main';

export default [
    {
        navigationName: 'Load before rendering',
        path: '/load-before-rendering',
        component: lazy(() => import('./LoadBeforeRendering')),
    },
    {
        navigationName: 'Resource as prop',
        path: '/resource-as-prop',
        component: lazy(() => import('./ResourceAsProp')),
    },
    {
        navigationName: 'Race conditions',
        path: '/race-conditions',
        component: lazy(() => import('./RaceConditions')),
    },
    {
        navigationName: 'Implementation details',
        path: '/implementation-details',
        component: lazy(() => import('./ImplementationDetails')),
    },
    {
        navigationName: 'With hooks',
        path: '/with-hooks',
        component: () => 'WithHooks',
    },
    {
        navigationName: 'Main View',
        path: '/*',
        component: Main,
    },
];
