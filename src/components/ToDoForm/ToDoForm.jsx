import React, { useState } from 'react'

const ToDoForm = ({addtask}) => {
    const [todovalue, setTodovalue] = useState('')
    const inputhandler = (e)=>{
        setTodovalue(e.target.value)
    }
    const Addtodo =()=>{
        addtask(todovalue)
        setTodovalue('')
       

    }
  return (
    <div>
        <input type="text" onChange={inputhandler} value = {todovalue} />
        <button onClick={Addtodo}>ADD</button>

    </div>
  )
}

export default ToDoForm