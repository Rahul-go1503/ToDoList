import data from './data.json'
import './App.css';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import { useState } from 'react';

function App() {
  
    const [todolists, setTodolists] = useState(data)
  const addtask=(todovalue)=>{
    let copy = [...todolists]
    copy = [...todolists , {id: todolists.length +1,
    task: todovalue,
    complete: false}]
    setTodolists(copy)
  }
  return (
    <div className="App">
        <Header/>
        <ToDoForm addtask={addtask}/>
        <ToDoList todolists={todolists}/>
    </div>
  );
}

export default App;
