import React from 'react'
import { connect } from 'react-redux'
import QrReader from 'react-qr-reader'

import { pushRoute } from './../../actions/routing-type'

export const ReaderBlock = ({ delay, previewStyle, handleScan, handleError }) => {
  console.scope('containers:home:search')
  return (
    <div>
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          />
      </div>
  )
}

const mapStateToProps = state => ({
  delay: 500,
  previewStyle: {
    height: 240,
    width: 320,
  }
})

const mapDispatchToProps = dispatch => ({
  handleScan: data => {
    if (data !== null) {
      console.scope('page:qr-code', data)
      const res = data.split('#')
      dispatch(pushRoute(res[1]))
    }
  },
  handleError: err => {
    console.error(err)
  },
})

const ReaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReaderBlock)

export default ReaderContainer
