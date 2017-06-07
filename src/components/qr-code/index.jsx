import React from 'react'
import Reader from './reader'
import { Container } from 'reactstrap'

import Nav from './../nav'

const QrCode = () => {
  console.scope('pages:qr-code')

  return (
    <span>
      <Nav />
      <Container>
        <p>Filmez l'affiche pour découvrir le thème</p>
        <Reader />
      </Container>
    </span>
  )
}

QrCode.pathname = '/qr-code'

export default QrCode