const POST_LIST_LOADED = 'POST_LIST_LOADED';
const POST_LIST_LOADING = 'POST_LIST_LOADING';

const postListLoaded = () => ({ type: POST_LIST_LOADED });
const postListLoading = () => ({ type: POST_LIST_LOADING });

export { POST_LIST_LOADED, POST_LIST_LOADING, postListLoaded, postListLoading };
