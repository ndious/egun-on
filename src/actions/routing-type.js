import { LOCATION_CHANGE } from 'react-router-redux'
export const pushRoute = (pathname, query = '') => {
  console.scope('actions:routing', LOCATION_CHANGE, { pathname, query })
  return {
    type: LOCATION_CHANGE,
    payload: {
      pathname,
      query,
    }
  }
}