import React from 'react'
import imgPageNotF from './page_not_found.jpg'
import './pageNotFound.css'

function NoPage() {
  return (
    <div>Error 404 - Page not Found
        <img alt='imag' src={imgPageNotF}></img>
    </div>
  )
}

export default NoPage