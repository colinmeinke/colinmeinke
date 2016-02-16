import { UPDATE_POST_LIST } from '../actions';

const postList = ( state = [], action ) => {
  switch ( action.type ) {
    case UPDATE_POST_LIST:
      return action.postList;
    default:
      return state;
  }
};

export default postList;
