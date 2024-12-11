import React from 'react'

export default function Todolist() {

    let todos = [
        "1",
        "2",
        "3",
    ]
  return (
    <ul className='main'>
      {todos.map((todo, todoindex) => {
        return (
            <li className='todoitem' key={todoindex}>{todo}
                <i class="fa-solid fa-pen-to-square"></i>
            </li>
            )
      })}
    </ul>
  )
}
