import React from 'react'
import { connect } from 'react-redux'

import { collapse } from './../../../actions/site-type'

const CategoryBlock = ({ name, id, active, handleClick }) => {
  return (
    <span>
      <button className={`btn btn-${active ? 'success' : 'secondary'}`} onClick={() => handleClick(id)}>{name.trans}</button>
    </span>
  )
}

const mapStateToProps = (state, ownState) => {
  return {
    active: state.site.collapse === ownState.id,
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: (id) => {
    dispatch(collapse(id))
  }
})

const CategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryBlock)

export default CategoryContainer