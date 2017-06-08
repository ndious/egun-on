import React from 'react'
import { connect } from 'react-redux'


const Home = () => (<span>
  <h1>Egun on <small>Bonjour</small></h1>
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