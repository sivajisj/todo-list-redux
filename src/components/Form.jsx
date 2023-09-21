import React, { useState } from 'react'


import {useDispatch} from "react-redux"
import { addTodo } from './actions'
const Todo = () => {
  const dispatch = useDispatch()
  const [todoTitle , setTodoTitle] = useState("")

  const handleTodo = ()=>{
    console.log("sj")
    console.log("title:"+ todoTitle)
    if(todoTitle.trim()){
      const newTodo = {title : todoTitle}
      dispatch(addTodo(newTodo))
    }
   
  }
  
 
    return (
    <div className='sj '>
      <div className="input-group child ">
      <input type="text" class="form-control" value={todoTitle} onChange={(e)=>{
        e.preventDefault();
        setTodoTitle(e.target.value)
      }} placeholder="Enter text..." aria-label="Enter text"/>
    <div class="input-group-append">
        <button class="btn btn-primary" onClick={handleTodo}>Add</button>
    
    </div>
      </div>
    </div>
  )
}

export default Todo

