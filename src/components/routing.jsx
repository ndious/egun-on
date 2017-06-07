import React from 'react'
import { Router, IndexRedirect, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Store from './../store'
import Layout from './layout'
import { HomePage, QrCodePage, ThemePage } from './pages'

const history = syncHistoryWithStore(hashHistory, Store)

const Routing = () => (
  <Router history={ history }>
    <Route path="/" component={ Layout }>
      <IndexRedirect to={ HomePage.getPath() } />
      <Route path={ HomePage.getPath('/') } component={ HomePage } />
      <Route path={ QrCodePage.getPath('/') } component={ QrCodePage } />
      <Route path={ ThemePage.getPath('/') } component={ ThemePage } />
    </Route>
  </Router>
)

export default Routing
