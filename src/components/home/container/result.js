import React from 'react'
import { connect } from 'react-redux'

const Result = ({ trans, eusk }) => {
  console.scope('containers:home:search', 'result', trans)
  return (
    <div>
      {trans} : {eusk}
    </div>
  )
}

const ResultBlock = ({ is_searching, words }) => {
  console.scope('containers:home:result')
  return (
    <span>
      {is_searching && words.map(word => (<Result key={word.id} {...word} />))}
    </span>
  )
}

const mapStateToProps = state => {
  return {
    is_searching: state.site.search.length !== 0,
    words: state.dictionary.filter(word => word.trans.includes(state.site.search.toLowerCase()))
  }
}

const ResultContainer = connect(
  mapStateToProps,
  null,
)(ResultBlock)

export default ResultContainer