import React from 'react'
import Navbar from './components/Navbar'
import Todo from './components/Form'
// import "./components/TodoList"
import TodoList from './components/TodoList'
import Footer from './components/Footer'
const App = () => {


  return (
    <div>
      <Navbar/>
      <Todo/>
     <TodoList/>
     <Footer/>
    </div>
  )
}

export default App

