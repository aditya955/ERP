import './container.scss'
import React from 'react'

const Container = ({children}) => {
  return (
    <div className='main-container'>{children}</div>
  )
}

export default Container