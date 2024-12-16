import React, { useState } from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"


function App() {

  const [todos, setTodos] = useState([])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return index !== todoIndex
    })
    setTodos(newTodoList)
  }

  return (
    <>
      <Todoinput handleAddTodos={handleAddTodos}/>
      <Todolist handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
