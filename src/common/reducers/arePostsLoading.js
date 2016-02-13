import { POSTS_LOADED, POSTS_LOADING } from '../actions/arePostsLoading';

const arePostsLoading = ( state = true, action ) => {
  switch ( action.type ) {
    case POSTS_LOADED:
      return false;
    case POSTS_LOADING:
      return true;
    default:
      return state;
  }
};

export default arePostsLoading;
