import React from 'react'
import './ToDoList.scss'
import {Card} from '../Card/Card'

interface ToDoListProps {
  todoList: Array<{name: string, desc: string, id: number}>
}

export const ToDoList: React.FC<ToDoListProps> = props => {

  const jsxToDos = () => {
    return props.todoList.map(todo => {
      return <Card name={todo.name} desc={todo.desc} id={todo.id} key={todo.name}/>
    })
  }
  

  return(
    <section className='todo-section'>
        <h2>To Do</h2>
        <div className='todos'>
          {jsxToDos()}
        </div>
      {/* <div className='completed'>
        <h2>Done!</h2>
      </div> */}

    </section>
  )

}