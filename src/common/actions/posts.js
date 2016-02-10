import { posts } from '../config/posts';

import { tagMatch } from '../helpers';

const GET_POSTS = 'GET_POSTS';

const getPosts = ({ tags = []} = {}) => ({
  posts: posts.filter( post => (
    post.published &&
    ( !tags.length || tagMatch( tags, post.tags ))
  )),
  type: GET_POSTS,
});

export { GET_POSTS, getPosts };
