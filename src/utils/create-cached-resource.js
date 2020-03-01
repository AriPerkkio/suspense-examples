export const createResource = method => {
    const resourceCache = new Map();

    return {
        read: (cacheKey, ...args) => {
            if (!resourceCache.has(cacheKey)) {
                throw method(...args).then(value =>
                    resourceCache.set(cacheKey, value)
                );
            }

            return resourceCache.get(cacheKey);
        },
    };
};
