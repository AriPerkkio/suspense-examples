export const createResource = method => {
    let response;
    let isLoading = true;
    let error;

    let pendingPromise = method()
        .then(json => {
            response = json;
            isLoading = false;
        })
        .catch(e => {
            error = e;
            isLoading = false;
        });

    return {
        read: () => {
            if (isLoading) throw pendingPromise;
            if (error) throw error;
            return response;
        },
    };
};
