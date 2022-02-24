import React from 'react'
import Header from '../Header/Header'
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
// const userName = window.prompt("Hey! Whats Your Name ?")
const Home = () => {
  return (
      <div className="Container">
        <Header />
        <div className="grpIcon">
          <Link to='/add' >
            <div className="icon_1 addtask">
              <AddIcon className='icon' />
              <p>Add Task</p>
            </div>
          </Link>
          <Link to='/view'>
            <div className="icon_2 alltasks">
              <AssignmentIcon className='icon' />
              <p>Tasks</p>
            </div>
          </Link>
        </div>
        {/* <p>{userName}</p> */}
      </div>
  )
}

export default Home 