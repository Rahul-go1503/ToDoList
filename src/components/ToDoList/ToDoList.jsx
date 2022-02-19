import React from 'react'
import Header from '../Header/Header';
import ToDo from '../ToDo/ToDo'
import './ToDoList.css'


import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
const ToDoList = ({ todolists,removetask }) => {
  console.log(todolists);
  console.log(removetask);
  const deletetask=(id)=>{
    removetask(id)
  }
  return (
    <div className='Container'>
      <Header />
      <div className="grpIcon">
        <Link to='/' >
          <div className="icon_1 addtask">
            <HomeIcon className='icon' />
            <p>Home</p>
          </div>
        </Link>
        <Link to='/add'>
          <div className="icon_2 alltasks">
            <AddIcon className='icon' />
            <p>Add Task</p>
          </div>
        </Link>
      </div>
      <div className='ToDoListBox'>
        {todolists.map(todo => <ToDo todo={todo} deletetask = {deletetask} />)}
      </div>
    </div>
  )
}

export default ToDoList