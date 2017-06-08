import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import routeFor from 'react-route-config'
import TiCamera from 'react-icons/lib/ti/camera'

const iconStyle = {
  height: '125px',
  width: '100%',
  position: 'fixed',
  marginLeft: '-15px',
  bottom: '10px',
}

const Home = () => (<span>
  <h1>Egun on <small>Bonjour</small></h1>
</span>)

const HomeBlock = ({ is_searching }) => {
  console.scope('containers:home:result')
  return (
    <span>
      {!is_searching && <Home />}
      <Link to={routeFor('qr-code')}><TiCamera style={iconStyle} /></Link>
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