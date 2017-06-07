import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import TiCancel from 'react-icons/lib/ti/cancel'

import { updateSearch, cleanSearch } from './../../../actions/site-type'

export const SearchBlock = ({ search, handleChange, handleClick }) => {
  console.scope('containers:home:search')
  return (
    <Form>
      <FormGroup>
        <Button onClick={handleClick}><TiCancel /></Button>
        <Input type="text" name="search" id="searchInput" value={search} onChange={handleChange} />
      </FormGroup>
    </Form>
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
