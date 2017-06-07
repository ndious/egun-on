import React from 'react'
import { Link } from 'react-router'
import routeFor from 'react-route-config'
import ChevronLeft from 'react-icons/lib/ti/chevron-left'

const Nav = () => {
  console.scope('conponent:nav')

  return (
    <nav className="navbar navbar-light bg-faded">
      <Link className="navbar-brand" to={routeFor('home')}><ChevronLeft /> Egun on</Link>
    </nav>
  )
}

export default Nav