if (!window.CACHE_STORE) {
    window.CACHE_STORE = [];
}

export const addCache = cache => window.CACHE_STORE.push(cache);
export const clearCaches = () =>
    window.CACHE_STORE.forEach(cache => cache && cache.clear && cache.clear());
