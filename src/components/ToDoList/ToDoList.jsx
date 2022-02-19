import React from 'react'
import ToDo from '../ToDo/ToDo'

const style = {
    margin: '40px auto',
    width : '400px',
    border : '2px solid blue'
}

const ToDoList = ({todolists}) => {
    console.log(todolists);
  return (
    <div style={style}>
        {todolists.map(todo=> <ToDo todo ={todo}/>)}
    </div>
  )
}

export default ToDoList