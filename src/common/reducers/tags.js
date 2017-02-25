import { UPDATE_TAGS } from '../actions'

const tags = (state = [], action) => {
  switch (action.type) {
    case UPDATE_TAGS:
      return action.tags
    default:
      return state
  }
}

export default tags
