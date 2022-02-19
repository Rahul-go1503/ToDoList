import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './todo.css'
const ToDo = ({todo ,deletetask}) => {
    const confirmDel = ()=>{
    const userRes = window.confirm("wanna to delete?");
    if(userRes)deletetask(todo.id)
    }
  return (
    <div className="todo">
      <p>{todo.task}</p>
      <DeleteIcon className='icon' onClick={confirmDel}/>
    </div>
  )
}

export default ToDo