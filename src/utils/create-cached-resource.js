export const createCachedResource = method => {
    const resourceCache = new Map();

    return {
        read: (...args) => {
            const cacheKey = args.join();

            if (!resourceCache.has(cacheKey)) {
                throw method(...args)
                    .then(value => resourceCache.set(cacheKey, { value }))
                    .catch(error => {
                        resourceCache.set(cacheKey, { error });
                    });
            }

            const { value, error } = resourceCache.get(cacheKey);

            if (error) {
                throw error;
            }

            return value;
        },
    };
};
