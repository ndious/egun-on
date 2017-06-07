import React from 'react'
import { Container } from 'reactstrap'

const Layout = ({ children }) => (
  <Container className="App">
    {children}
  </Container>
);

export default Layout
