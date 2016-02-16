import { UPDATE_MORE_POSTS } from '../actions';

const morePosts = ( state = false, action ) => {
  switch ( action.type ) {
    case UPDATE_MORE_POSTS:
      return action.morePosts;
    default:
      return state;
  }
};

export default morePosts;
