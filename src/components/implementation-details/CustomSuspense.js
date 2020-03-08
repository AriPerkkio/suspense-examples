import React from 'react';

export default class CustomSuspense extends React.Component {
    state = { isLoading: false };

    componentDidCatch(throwable) {
        if (throwable instanceof Promise) {
            this.setState({ isLoading: true });

            throwable.then(() => {
                this.setState({ isLoading: false });
            });
        } else {
            throw throwable;
        }
    }

    render() {
        if (this.state.isLoading) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}
