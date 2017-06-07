import { PUSH_WORD as THEME_PUSH_WORD } from './../actions/themes-type'
import { PUSH_WORD as DICTIONARY_PUSH_WORD } from './../actions/dictionary-type'

const Word = (state = {}, { type, ...action }) => {
  switch (type) {
    case THEME_PUSH_WORD:
    case DICTIONARY_PUSH_WORD:
      return {
        key: action.key,
        eusk: action.eusk[action.key],
        trans: action.trans[action.key]
      }
    default:
      return state
  }
}

export default Word
