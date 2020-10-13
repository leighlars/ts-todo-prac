import React, {useState} from 'react'
import './Form.scss'

interface FormProps {
  addToDo: Function
}

export const Form: React.FC<FormProps> = props => {

  const [toDoName, setToDoName] = useState<string>('')
  const [toDoDesc, setToDoDesc] = useState<string>('')

  const add = (e: React.FormEvent<HTMLFormElement>, toDoName: string, toDoDesc: string) => {
    e.preventDefault()
    const state = {name: toDoName, desc: toDoDesc, id: Date.now()}
    props.addToDo(state)
    setToDoName('')
    setToDoDesc('')
  }

  return(
    <form className='add-todo-form' onSubmit={(e) => {add(e, toDoName, toDoDesc)}}>

      <input 
        className='name-input'
        aria-label='name-input'
        type='text'
        placeholder='Title'
        name='title'
        value={toDoName}
        onChange={(e)=>setToDoName(e.target.value)}
        max="100"
      />

      <input 
        type='text'
        placeholder='Description'
        name='description'
        value={toDoDesc}
        onChange={(e)=>setToDoDesc(e.target.value)}
        max='100'
      />

      <button type='submit' className='add-button'>Add</button>

    </form>
  )

}