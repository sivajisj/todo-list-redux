import React from 'react'
import { useSelector } from 'react-redux'
import Todo from "./Todo"
const TodoList = () => {
    const todos = useSelector((state)=> state.todos)
    console.log(todos)
  return (
    <ul className='list-group mt-5'>
        {todos.map((todo)=>(
            <Todo id={todo.id} key={todo.id} title={todo.title}/>
        ))}
    </ul>
  )
}

export default TodoList
