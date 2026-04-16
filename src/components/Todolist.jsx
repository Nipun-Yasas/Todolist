import TodoCard from './TodoCard'

export default function Todolist(props) {

  const { todos } = props

  if (!todos.length) {
    return (
      <section className='todo-empty-state'>
        <p>No tasks yet.</p>
        <span>Add your first task above to get started.</span>
      </section>
    )
  }
    
  return (
    <ul className='todo-list'>
      {todos.map((todo, todoIndex) => {
        return (
           <TodoCard {...props} key={todoIndex}
           index={todoIndex}>
            <p className='todo-item-text'>{todo}</p>
           </TodoCard>
          )
      })}
    </ul>
  )
}
