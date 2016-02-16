import { UPDATE_PAGE } from '../actions';

const page = ( state = 1, action ) => {
  switch ( action.type ) {
    case UPDATE_PAGE:
      return action.page;
    default:
      return state;
  }
};

export default page;
