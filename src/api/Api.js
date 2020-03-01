import { delay } from 'utils';

class Api {
    baseUrl = 'https://jsonplaceholder.typicode.com';
    subscribers = [];

    constructor() {
        this._startPollingComments();
    }

    getComment(index) {
        return this._fetch(`${this.baseUrl}/comments/${index}`);
    }

    getUsers() {
        return this._fetch(`${this.baseUrl}/users`);
    }

    getUser(id) {
        return this._fetch(`${this.baseUrl}/users/${id}`);
    }

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

    async _fetch(url) {
        await delay(2000);

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        `Request to ${url} failed with HTTP${response.status}`
                    );
                }

                return response;
            })
            .then(response => response.json());
    }
}

export default new Api();
