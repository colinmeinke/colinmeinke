import { UPDATE_POST } from '../actions';

const post = ( state = {}, action ) => {
  switch ( action.type ) {
    case UPDATE_POST:
      return action.post;
    default:
      return state;
  }
};

export default post;
