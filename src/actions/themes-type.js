export const CREATE_THEME = '@@theme/CREATE_THEME'
export const createTheme = (key, eusk, trans) => {
  console.scope('actions:dictionary', CREATE_THEME, key)
  return {
    type: CREATE_THEME,
    key,
    eusk,
    trans,
  }
}

export const PUSH_CATEGORY = '@@theme/PUSH_CATEGORY'
export const pushCategory = (themeId, key, categories, trans) => {
  console.scope('actions:dictionary', PUSH_CATEGORY, themeId, key)
  return {
    type: PUSH_CATEGORY,
    themeId,
    key,
    categories,
    trans,
  }
}

export const PUSH_WORD = '@@theme/PUSH_WORD'
export const pushWord = (themeId, catId, key, eusk, trans) => {
  console.scope('actions:dictionary', PUSH_WORD, themeId, catId, key)
  return {
    type: PUSH_WORD,
    themeId,
    catId,
    key,
    eusk, 
    trans,
  }
}
