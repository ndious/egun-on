import React from 'react'
import { connect } from 'react-redux'

import { collapse } from './../../../actions/site-type'
import CategoryBlock from './category'
import WordsBlock from './words'

const ThemeBlock = ({ theme, handleRender, handleCilck }) => {
  console.scope('containers:theme', theme)
  return (
    <span>
      <h1>{theme.name.eusk} <small>{theme.name.trans}</small></h1>
      {theme.categories.map(category => <CategoryBlock key={category.id} {...category} handleCilck={handleCilck} />)}
      <WordsBlock theme={theme} />
      {handleRender(theme.categories[0].id)}
    </span>
  )
}

const mapStateToProps = (state, ownState) => {
  return {
    theme: state.themes.filter(theme => theme.id === ownState.theme)[0],
  }
}

const mapDispatchToProps = dispatch => ({
  handleRender: (id) => {
    dispatch(collapse(id))
  },
  handleClick: (id) => {
    dispatch(collapse(id))
  }
})

const ThemeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeBlock)

export default ThemeContainer