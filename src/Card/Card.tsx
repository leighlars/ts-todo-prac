import React from 'react'
import './Card.scss'

interface CardProps {
  name: string
  desc: string
  id: number
}

export const Card: React.FC<CardProps> = props => {
  return(
    <div className='todo-card'>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <button id={`${props.id}`}>Completed</button>
    </div>
  )
}