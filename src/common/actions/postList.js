import { postList } from '../config/posts';

import { formatPosts, tagMatch } from '../helpers';

const UPDATE_POST_LIST = 'UPDATE_POST_LIST';

const getPostList = ({ tags = [] } = {}) => ({
  postList: formatPosts(
    postList
      .filter(
        post => post.published && (!tags.length || tagMatch(tags, post.tags))
      )
      .sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished))
  ),
  type: UPDATE_POST_LIST
});

export { UPDATE_POST_LIST, getPostList };
