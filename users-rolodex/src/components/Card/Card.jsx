import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className="card-container">
      <h2>{props.users.name.first}</h2>
      <img src={props.users.picture.large} alt="sike"></img>
    </div>
  )
}

export default Card
