import React from 'react'
import './ToDoList.scss'
import {Card} from '../Card/Card'

interface ToDoListProps {
  todoList: Array<{name: string, desc: string, id: number}>
}

export const ToDoList: React.FC<ToDoListProps> = props => {

  const jsxToDos = () => {
    props.todoList.shift()
    return props.todoList.map(todo => {
      return <Card name={todo.name} desc={todo.desc} id={todo.id} key={todo.name}/>
    })
  }
  

  return(
    <section className='todo-list'>
      {jsxToDos()}
    </section>
  )

}