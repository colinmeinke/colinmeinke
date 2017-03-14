import { UPDATE_POST_SLUG } from '../actions';

const postSlug = (state = '', action) => {
  switch (action.type) {
    case UPDATE_POST_SLUG:
      return action.postSlug;
    default:
      return state;
  }
};

export default postSlug;
