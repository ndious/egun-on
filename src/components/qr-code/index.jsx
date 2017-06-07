import React from 'react'
import Reader from './reader'

const QrCode = () => {
  console.scope('pages:qr-code')

  return (
    <div>
      <p>Filmez l'affiche pour découvrir le thème</p>
      <Reader />
    </div>
  )
}

QrCode.pathname = '/qr-code'

export default QrCode