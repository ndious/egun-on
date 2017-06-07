import React from 'react'
import { connect } from 'react-redux'
import reactStringReplace from 'react-string-replace'

const Result = ({ trans, eusk, search }) => {
  console.scope('containers:home:search', 'result', trans)
  return (
    <div>
      {reactStringReplace(trans, new RegExp(`(${search})`, 'i'), (match, i) => (
        <strong className="highlight">{match}</strong>
      ))} : {eusk}
    </div>
  )
}

const ResultBlock = ({ is_searching, words, search }) => {
  console.scope('containers:home:result')
  return (
    <span>
      {is_searching && words.map(word => (<Result key={word.id} search={search} {...word} />))}
    </span>
  )
}

const mapStateToProps = state => {
  return {
    is_searching: state.site.search.length !== 0,
    words: state.dictionary.filter(word => word.trans.includes(state.site.search.toLowerCase())), 
    search: state.site.search,
  }
}

const ResultContainer = connect(
  mapStateToProps,
  null,
)(ResultBlock)

export default ResultContainer