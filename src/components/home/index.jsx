import React from 'react'

import Search from './container/search'
import Result from './container/result'
import HomeBlock from './container/home'

const Home = () => {
  console.scope('pages:home')

  return (
    <div>
      <Search />
      <Result />
      <HomeBlock />
    </div>
  )
}

Home.pathname = '/home'

export default Home