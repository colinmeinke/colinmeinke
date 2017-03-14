const POST_LOADED = 'POST_LOADED';
const POST_LOADING = 'POST_LOADING';

const postLoaded = () => ({ type: POST_LOADED });
const postLoading = () => ({ type: POST_LOADING });

export { POST_LOADED, POST_LOADING, postLoaded, postLoading };
