import { POST_LIST_LOADED, POST_LIST_LOADING } from '../actions';

const postListLoading = ( state = true, action ) => {
  switch ( action.type ) {
    case POST_LIST_LOADED:
      return false;
    case POST_LIST_LOADING:
      return true;
    default:
      return state;
  }
};

export default postListLoading;
