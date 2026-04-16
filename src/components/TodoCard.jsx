export default function TodoCard(props) {
  const { children,handleDeleteTodo,index,handleEditTodo } = props

  return (
    <li className='todo-item'>
      {children}
      <div className="todo-actions">
        <button className='icon-btn icon-btn-edit' onClick={()=>{
          handleEditTodo(index)
        }}>
        <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button className='icon-btn icon-btn-delete' onClick={()=>{
          handleDeleteTodo(index)
        }}>
        <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
