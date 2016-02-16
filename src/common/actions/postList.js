import { postList } from '../config/posts';

import { formatPosts, tagMatch } from '../helpers';

const UPDATE_POST_LIST = 'UPDATE_POST_LIST';

const getPostList = ({ tags = []} = {}) => ({
  postList: formatPosts( postList.filter( post => (
    post.published &&
    ( !tags.length || tagMatch( tags, post.tags ))
  ))),
  type: UPDATE_POST_LIST,
});

export { UPDATE_POST_LIST, getPostList };
