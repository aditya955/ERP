import './usercard.scss'
import React from 'react'

const UserCard = (props) => {
    const year = (props.year == 1) ? "FE" : (props.year == 2) ? "SE" : (props.year == 3) ? "TE" : "BE"
    return (
        <div className="card">
            <img src={props.img} alt="Student's Passport Size Photo" />
            <h1>{props.name}</h1>
            <p class="year"> {year} </p>
            <p> {props.course} </p>
        </div>
    )
}

UserCard.defaultProps = {
    img: "https://picsum.photos/200",
    name: "John Doe",
    year: "B.E",
    course: "CSEIOTCSBC"
}

export default UserCard