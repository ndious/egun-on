import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import routeFor from 'react-route-config'
import TiCamera from 'react-icons/lib/ti/camera'


const Home = () => (<span>
  <h1>Egun on</h1>
  <h2>Bonjour</h2>
  <Link to={routeFor('qr-code')}><TiCamera /></Link>
</span>)

const HomeBlock = ({ is_searching }) => {
  console.scope('containers:home:result')
  return (
    <span>
      {!is_searching && <Home />}
    </span>
  )
}

const mapStateToProps = state => {
  return {
    is_searching: state.site.search.length !== 0,
  }
}

const HomeContainer = connect(
  mapStateToProps,
  null,
)(HomeBlock)

export default HomeContainer