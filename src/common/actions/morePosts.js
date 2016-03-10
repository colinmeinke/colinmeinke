import { postsPerPage } from '../config/posts';

const UPDATE_MORE_POSTS = 'UPDATE_MORE_POSTS';

const updateMorePosts = ({ page = 1, postList = []} = {}) => ({
  morePosts: postList.length > ( page * postsPerPage ),
  type: UPDATE_MORE_POSTS,
});

export { UPDATE_MORE_POSTS, updateMorePosts };
