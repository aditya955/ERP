import './style.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='error404'>
      <div className="text">
        <h1> Whoops! </h1>
        <h3> We can't find what you are looking for :(</h3>
        <h5> Maybe this page got lost in Assignments. </h5>
        <p> Head back to your <Link to="/">Classes!</Link> </p>
      </div>
      <div className="image">
        <img src='/images/error404.png' alt='error404' />
      </div>
    </div>
  )
}

export default Error404