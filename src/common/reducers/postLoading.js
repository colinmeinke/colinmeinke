import { POST_LOADED, POST_LOADING } from '../actions';

const postLoading = ( state = true, action ) => {
  switch ( action.type ) {
    case POST_LOADED:
      return false;
    case POST_LOADING:
      return true;
    default:
      return state;
  }
};

export default postLoading;
