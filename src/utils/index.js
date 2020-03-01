export const compose = (...fns) =>
    fns.reduce((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)));

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export { createResource } from './create-resource';
export { createCachedResource } from './create-cached-resource';
