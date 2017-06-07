import React from 'react'
import { Link } from 'react-router'
import routeFor from 'react-route-config'
import ChevronLeft from 'react-icons/lib/ti/chevron-left'

import ThemeBlock from './container/theme'

const Theme = ({ params }) => {
  console.scope('pages:theme', params.name)

  return (
    <div>
      <Link to={routeFor('home')}><ChevronLeft /></Link>
      <ThemeBlock theme={params.name} />
    </div>
  )
}

Theme.pathname = '/themes/:name'

export default Theme