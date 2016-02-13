const POSTS_LOADED = 'POSTS_LOADED';
const POSTS_LOADING = 'POSTS_LOADING';

const postsLoaded = () => ({ type: POSTS_LOADED });
const postsLoading = () => ({ type: POSTS_LOADING });

export { POSTS_LOADED, POSTS_LOADING, postsLoaded, postsLoading };
