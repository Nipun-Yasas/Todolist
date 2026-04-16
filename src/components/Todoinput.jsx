export default function TodoInput(props) {

  const {handleAddTodos,todoValue, setTodoValue} =props
  const isEmpty = !todoValue.trim()

  return (
    <header className='todo-input-wrap'>
        <input
        className='todo-input'
        value={todoValue} onChange={(e)=>{
          setTodoValue(e.target.value)
        }}
        placeholder='Enter new task'/>
        <button
        className='todo-add-btn'
        disabled={isEmpty}
        onClick={()=>{
          if(isEmpty){
            return
          }
          handleAddTodos(todoValue)
          setTodoValue('')}
        }>Add</button>
    </header>
  )
}
