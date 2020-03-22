import { lazy } from 'react';

import Main from './Main';

export default [
    {
        navigationName: 'Load before rendering',
        path: '/load-before-rendering',
        component: lazy(() => import('./LoadBeforeRendering')),
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
        navigationName: 'Suspense List',
        path: '/suspense-list',
        component: lazy(() => import('./SuspenseList')),
    },
    {
        navigationName: 'Transition',
        path: '/transition',
        component: lazy(() => import('./Transition')),
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
