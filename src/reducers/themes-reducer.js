import { CREATE_THEME, PUSH_CATEGORY, PUSH_WORD } from './../actions/themes-type'
import Word from './word-reducer'

const Category = (state = {
  id: null,
  name: {},
  words: []
}, action) => {
  switch (action.type) {
    case PUSH_WORD:
      if (state.id !== action.catId) {
        return state
      }
      return Object.assign({}, state, {
        words: [
          ...state.words,
          Word(undefined, action)
        ]
      })
    case PUSH_CATEGORY:
      return {
        id: action.key,
        name: {
          key: action.key,
          eusk: action.categories[action.key].name,
          trans: action.trans[action.key],
        },
        words: []
      }
    default:
      return state
  }
}

const Theme = (state = {
  id: null,
  name: {},
  categories: []
}, action) => {
  switch (action.type) {
    case PUSH_WORD:
      if (state.id !== action.themeId) {
        return state
      }
      return Object.assign({}, state, {
        categories: state.categories.map(category => Category(category, action))
      })
    case CREATE_THEME:
      return {
        id: action.key,
        name: {
          key: action.key,
          eusk: action.eusk[action.key],
          trans: action.trans[action.key],
        },
        categories: []
      }
    case PUSH_CATEGORY:
      if (state.id !== action.themeId) {
        return state
      }
      return Object.assign({}, state, {
        categories: [
          ...state.categories,
          Category(undefined, action)
        ]
      })
    default:
      return state
  }
}

const Themes = (state = [], action) => {

  switch (action.type) {
    case PUSH_WORD:
    case PUSH_CATEGORY:
      return state.map(theme => Theme(theme, action))
    case CREATE_THEME:
      return [
        ...state,
        Theme(undefined, action)
      ]
    default:
      return state
  }
}

export default Themes