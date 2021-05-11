import React from 'react'
import Card from '../Card/Card'
import './CardList.css'
function CardList(props) {
  return (
    <div className="card-list">
      {console.log(props.users.id)}
      {props.users ?
      props.users.map(user=><Card users={user}/>) 
      :''}
    </div>
  )
}

export default CardList