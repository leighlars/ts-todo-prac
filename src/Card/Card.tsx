import React, { useState } from 'react'
import './Card.scss'

interface CardProps {
  name: string
  desc: string
  id: number
}

export const Card: React.FC<CardProps> = props => {
  const [completedState, setCompletedState] = useState<string>('incomplete')

  const toggleState = () => {
    const state = completedState === 'incomplete' ? 'complete' : 'incomplete'
    setCompletedState(state)
  }

  return(
    <div className='todo-card'>
      <h2>{props.name}</h2>
      <p className={`${completedState}-text`}>{props.desc}</p>
      <button 
        className={`${completedState}-btn`} 
        id={`${props.id}`}
        onClick={toggleState}  
        >{completedState === 'complete' ? 'Done!' : 'Complete'}</button>
    </div>
  )
}