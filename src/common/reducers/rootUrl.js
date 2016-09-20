import { UPDATE_ROOT_URL } from '../actions';

const rootUrl = ( state = '', action ) => {
  switch ( action.type ) {
    case UPDATE_ROOT_URL:
      return action.url;
    default:
      return state;
  }
};

export default rootUrl;
