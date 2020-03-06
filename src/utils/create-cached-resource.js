export const createCachedResource = method => {
    const resourceCache = new Map();

    return {
        read: (...args) => {
            const cacheKey = args.join();

            if (!resourceCache.has(cacheKey)) {
                const suspender = method(...args)
                    .then(value => resourceCache.set(cacheKey, { value }))
                    .catch(error => {
                        resourceCache.set(cacheKey, { error });
                    });

                resourceCache.set(cacheKey, { suspender });
            }

            const { value, suspender, error } = resourceCache.get(cacheKey);

            if (suspender) throw suspender;
            if (error) throw error;

            return value;
        },
    };
};
