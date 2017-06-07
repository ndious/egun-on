import React from 'react'
import { connect } from 'react-redux'

const WordsBlock = ({ words }) => {
  console.scope('containers:Words', words)
  return (
    <ul>
      {words.map(word => (<li key={word.key}>{word.trans} : {word.eusk}</li>))}
    </ul>
  )
}

const mapStateToProps = (state, ownState) => {
  return {
    words: ownState.theme.categories.filter(category => category.id === state.site.collapse)[0].words,
  }
}

const WordsContainer = connect(
  mapStateToProps,
  null,
)(WordsBlock)

export default WordsContainer