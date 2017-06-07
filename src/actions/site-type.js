export const UPDATE_SEARCH = '@@site/UPDATE_SEARCH'
export const updateSearch = search => {
  console.scope('actions:site', UPDATE_SEARCH, search)
  return {
    type: UPDATE_SEARCH,
    search,
  }
}

export const CLEAN_SEARCH = '@@site/CLEAN_SEARCH'
export const cleanSearch = () => {
  console.scope('actions:site', CLEAN_SEARCH)
  return {
    type: CLEAN_SEARCH,
  }
}


export const SET_COLLAPSE_OPEN = '@@site/SET_COLLAPSE_OPEN'
export const collapse = collapse => {
  console.scope('actions:site', SET_COLLAPSE_OPEN)
  return {
    type: SET_COLLAPSE_OPEN,
    collapse,
  }
}