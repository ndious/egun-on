import { PUSH_WORD } from './../actions/dictionary-type'
import Word from './word-reducer'

const Dictionary = (state = [], action) => {

  switch (action.type) {
    case PUSH_WORD:
      return [
        ...state,
        Word(undefined, action)
      ]
    default:
      return state
  }
}

export default Dictionary