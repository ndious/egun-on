import Dictionary from './data/dictionary'
import LangFr from './data/fr'
import Themes from './data/themes'

import Store from './store'

import { pushWord as dictionaryPushWord } from './actions/dictionary-type'
import { createTheme, pushCategory, pushWord as themePushWord } from './actions/themes-type'

export default () => {
  Object.keys(Dictionary).forEach(key => {
    Store.dispatch(dictionaryPushWord(key, Dictionary, LangFr))
  })

  Object.keys(Themes).forEach(themeId => {
    Store.dispatch(createTheme(themeId, Dictionary, LangFr))

    Object.keys(Themes[themeId]).forEach(catId => {
      Store.dispatch(pushCategory(themeId, catId, Themes[themeId], LangFr))

      Themes[themeId][catId].words.forEach(id => {
        Store.dispatch(themePushWord(themeId, catId, id, Dictionary, LangFr))
      })
    })
  })
}