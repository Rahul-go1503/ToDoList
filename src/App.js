import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import './GrpIcon.css'
import Home from './components/Home/Home';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import { v4 as uuidv4 } from 'uuid';

const getTodos = ()=>{
  let todos = localStorage.getItem('todos')
  if(todos) return JSON.parse(todos)
  else return []
}

function App() {
  const [todolists, setTodolists] = useState(getTodos())
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todolists))
 
  }, [todolists])
  const addtask = (todovalue) => {
    setTodolists([...todolists, {
      id: uuidv4(),
      task: todovalue,
      complete: false
    }])
  }
  const removetask = (id)=>{
    const filtertasks = todolists.filter(task =>{ return task.id!==id} )
    setTodolists(filtertasks);
    console.log(filtertasks);
  }
  
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<ToDoForm addtask={addtask} />} />
          <Route path='/view' element={<ToDoList todolists={todolists} removetask = {removetask} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
