import CacheStore from './cache-store'; // hide-line
// hide-line
export const createCachedResource = method => {
    const resourceCache = CacheStore.createCache(); // hide-line
    /* // hide-line
    const resourceCache = new Map();
   // hide-line */

    return {
        read: (...args) => {
            const cacheKey = args.join();

            if (!resourceCache.has(cacheKey)) {
                const promise = method(...args)
                    .then(value => resourceCache.set(cacheKey, value))
                    .catch(error => resourceCache.set(cacheKey, error));

                resourceCache.set(cacheKey, promise);
            }

            const resource = resourceCache.get(cacheKey);
            if (resource instanceof Promise) throw resource;
            if (resource instanceof Error) throw resource;

            return resource;
        },
    };
};
