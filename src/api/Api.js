import { delay } from 'utils';

class Api {
    baseUrl = 'https://jsonplaceholder.typicode.com';
    subscribers = [];
    requests = [];

    constructor() {
        this._startPollingComments();
    }

    getComment(index) {
        return this._fetch(`${this.baseUrl}/comments/${index}`);
    }

    getUsers = () => {
        return this._fetch(`${this.baseUrl}/users`);
    };

    getUser = id => {
        const delayMs = 1000 * parseInt(id);
        return this._fetch(`${this.baseUrl}/users/${id}`, { delayMs });
    };

    getUsersPosts(id) {
        return this._fetch(`${this.baseUrl}/users/${id}/posts`);
    }

    getUsersComments(id) {
        return this._fetch(`${this.baseUrl}/users/${id}/comments`);
    }

    getPosts() {
        return this._fetch(`${this.baseUrl}/posts`);
    }

    getPost(id) {
        return this._fetch(`${this.baseUrl}/posts/${id}`);
    }

    async postForm() {
        return delay(2000);
    }

    subscribeComments(cb) {
        this.subscribers.push(cb);
    }

    unsubscribeComments(cb) {
        this.subscribers = this.subscribers.filter(
            subscriber => subscriber !== cb
        );
    }

    _startPollingComments() {
        let postIndex = 1;

        setInterval(async () => {
            if (this.subscribers.length) {
                const comment = await this.getComment(postIndex++);
                this.subscribers.forEach(cb => cb(comment));
            }
        }, 2000);
    }

    async _fetch(url, options = {}) {
        const { delayMs } = options;
        const resource = url.replace(this.baseUrl, '');
        this.requests.push(`GET ${resource}`);

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        `Request to ${url} failed with HTTP${response.status}`
                    );
                }

                return response;
            })
            .then(response => response.json())
            .then(async json => {
                await delay(delayMs || 2000);

                this.requests.push(`OK ${resource}`);
                return json;
            });
    }
}

export default new Api();
