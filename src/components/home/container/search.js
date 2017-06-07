import React from 'react'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import TiCancel from 'react-icons/lib/ti/cancel'

import { updateSearch, cleanSearch } from './../../../actions/site-type'

export const SearchBlock = ({ search, handleChange, handleClick }) => {
  console.scope('containers:home:search')
  return (
    <nav className="navbar navbar-light bg-faded">
      <InputGroup>
        <InputGroupAddon onClick={handleClick}><TiCancel /></InputGroupAddon>
        <Input type="text" name="search" id="searchInput" value={search} onChange={handleChange} />
      </InputGroup>
    </nav>
  )
}

const mapStateToProps = state => ({
  search: state.site.search,
})

const mapDispatchToProps = dispatch => ({
  handleChange: (event) => {
    dispatch(updateSearch(event.target.value))
  },
  handleClick: () => {
    dispatch(cleanSearch())
  },
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBlock)

export default SearchContainer
