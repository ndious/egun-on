import React from 'react'
import { Container } from 'reactstrap'

import Nav from './../nav'
import ThemeBlock from './container/theme'

const Theme = ({ params }) => {
  console.scope('pages:theme', params.name)

  return (
    <span>
      <Nav />
      <Container>
        <ThemeBlock theme={params.name} />
      </Container>
    </span>
  )
}

Theme.pathname = '/themes/:name'

export default Theme