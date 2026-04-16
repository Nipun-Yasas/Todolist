"use client"

import { useState,useEffect } from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"



function App() {

  const [todos, setTodos] = useState([])
  const [todoValue,setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return index !== todoIndex
    })
    persistData(newTodoList)
    
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos [index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(()=>{

    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  },[])

  return (
    <div className="app-shell">
      <main className="todo-app">
        <section className="todo-header">
          <p className="todo-kicker">Everyday Planner</p>
          <h1>My Todo List</h1>
          <p className="todo-subtitle">Capture tasks quickly and keep your day moving.</p>
        </section>

        <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
        <Todolist handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
      </main>
    </div>
  )
}

export default App
