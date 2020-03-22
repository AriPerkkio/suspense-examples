class CacheStore {
    subscribers = [];
    store = [];

    createCache() {
        const cache = new Map();
        const cacheProxy = {
            set: (...args) => {
                this.notifySubscribers();
                return cache.set(...args);
            },
            get: cache.get.bind(cache),
            has: cache.has.bind(cache),
        };

        this.store.push(cache);
        this.notifySubscribers();

        return cacheProxy;
    }

    clearCaches = () => {
        this.store.forEach(_store => _store.clear());
        this.notifySubscribers();
    };

    subscribeCaches(subscriber) {
        this.subscribers.push(subscriber);

        subscriber(this.getCacheCount());
    }

    unSubscribeCaches(subscriber) {
        this.subscribers = this.subscribers.filter(
            _subscriber => _subscriber !== subscriber
        );
    }

    notifySubscribers() {
        setTimeout(() => {
            this.subscribers.forEach(subscriber => {
                subscriber(this.getCacheCount());
            });
        }, 10);
    }

    getCacheCount() {
        return this.store.reduce((sum, cache) => sum + cache.size, 0);
    }
}

export default new CacheStore();
