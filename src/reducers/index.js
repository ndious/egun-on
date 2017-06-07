import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import dictionary from './dictionary-reducer'
import themes from './themes-reducer'
import site from './site-reducer'

export const reducers = combineReducers({
  routing,
  dictionary,
  themes,
  site,
})