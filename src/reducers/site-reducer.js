import { UPDATE_SEARCH, CLEAN_SEARCH, SET_COLLAPSE_OPEN } from './../actions/site-type'

const Site = (state = {
  search: '',
  collapse: '',
}, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return Object.assign({}, state, {
        search: action.search
      })
    case CLEAN_SEARCH:
      return Object.assign({}, state, {
        search: ''
      })
    case SET_COLLAPSE_OPEN:
      return Object.assign({}, state, {
        collapse: action.collapse
      })
    default:
      return state
  }
}

export default Site