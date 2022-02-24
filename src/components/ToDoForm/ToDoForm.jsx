import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './ToDoForm.css'

import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';

const ToDoForm = ({addtask}) => {
    const [todovalue, setTodovalue] = useState('')
    const inputhandler = (e)=>{
        setTodovalue(e.target.value)
    }
    const Addtodo =(e)=>{
        if(todovalue){
          addtask(todovalue)
          setTodovalue('')
          alert("added")
          window.location.href = '/view'
        }else alert("Empty task is not added")
    }
  return (
        <div className="Container">
        <Header/>
        <input type="text" onChange={inputhandler} onKeyPress = {(e)=>e.key==='Enter'?Addtodo():null}  value = {todovalue} id= 'todoinput' />
        <Link to='/view'><button onClick={Addtodo} className = 'addbtn'>ADD</button></Link>
        <div className="grpIcon">
          <Link to='/' >
            <div className="icon_1 addtask">
              <HomeIcon className='icon' />
              <p>Home</p>
            </div>
          </Link>
          <Link to='/view'>
            <div className="icon_2 alltasks">
              <AssignmentIcon className='icon' />
              <p>Tasks</p>
            </div>
          </Link>
        </div>
        </div>
  )
}

export default ToDoForm