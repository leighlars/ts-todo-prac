import React, {useEffect, useState} from 'react';
import './App.scss';
import {Header} from '../Header/Header'
import {Form} from '../Form/Form'
import {ToDoList} from '../ToDoList/ToDoList'

const App: React.FC = () => {
  const [todoList, setToDoList] = useState<Array<{name: string, desc: string, id: number}>>([])

  useEffect(() => {}, [todoList])

  // const [completedList, setCompletedList] = useState<Array<object>>([{}])

  const addToDo = (todo: {name: string, desc: string, id: number}) => {
    const listCopy = [...todoList]
    listCopy.push(todo)
    setToDoList(listCopy)
  }


  return (
    <div className="App">
      <Header />
      <Form addToDo={addToDo}/>
      <ToDoList todoList={todoList}/>
    </div>
  )

}

export default App;
