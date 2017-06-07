import React from 'react'
import { Container } from 'reactstrap'

import Search from './container/search'
import Result from './container/result'
import HomeBlock from './container/home'

const Home = () => {
  console.scope('pages:home')

  return (
    <span>
      <Search />
      <Container>
        <Result />
        <HomeBlock />
      </Container>
    </span>
  )
}

Home.pathname = '/home'

export default Home