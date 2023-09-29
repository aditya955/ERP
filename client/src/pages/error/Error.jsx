import "./style.scss"
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="error">
            <div className="text">
                <h1> Hmm! </h1>
                <h3> Seems like something Broke! </h3>
                <h5> Don't do what you just did because it looks like it won't work. </h5>
                <p> Head back to your <Link to="/">Classes!</Link> </p>
            </div>
        </div>
    )
}

export default Error