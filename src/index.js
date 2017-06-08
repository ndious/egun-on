import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'console-scope'
import 'bootstrap/dist/css/bootstrap.css'
import './app.css'

import Routing from './components/routing.jsx'
import store from './store'
import load from './loader'

console.defineScope(' A Tiimber dev society program ', 'red', 'font-size:20px; text-shadow: 1px 1px 2px #2C2C2C;')
console.scope(' A Tiimber dev society program ')

load()

render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
)
