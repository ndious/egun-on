import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router'
import routeFor from 'react-route-config'
import TiCamera from 'react-icons/lib/ti/camera'

import Search from './container/search'
import Result from './container/result'
import HomeBlock from './container/home'

const iconStyle = {
  height: '200px',
  width: '100%',
  position: 'absolute',
  bottom: '10px',
}

const Home = () => {
  console.scope('pages:home')

  return (
    <span>
      <Search />
      <Container>
        <Result />
        <HomeBlock />
      </Container>
      <Link to={routeFor('qr-code')}><TiCamera style={iconStyle} /></Link>
    </span>
  )
}

Home.pathname = '/home'

export default Home