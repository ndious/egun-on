import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import routeFor from 'react-route-config'
import TiCamera from 'react-icons/lib/ti/camera'


const Home = ({ iconStyle }) => (<span>
  <h1>Egun on</h1>
  <h2>Bonjour</h2>
  <Link to={routeFor('qr-code')}><TiCamera style={iconStyle} /></Link>
</span>)

const HomeBlock = ({ is_searching, iconStyle }) => {
  console.scope('containers:home:result')
  return (
    <span>
      {!is_searching && <Home iconStyle={iconStyle} />}
    </span>
  )
}

const mapStateToProps = state => {
  return {
    is_searching: state.site.search.length !== 0,
    iconStyle: {
      height: '200px',
      width: '100%',
      marginLeft: '-15px',
      position: 'fixed',
      bottom: '10px',
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  null,
)(HomeBlock)

export default HomeContainer