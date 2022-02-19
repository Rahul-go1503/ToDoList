import React, { useState } from 'react'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import './todo.css'
const ToDo = ({todo}) => {
    const [isComplete, setIsComplete] = useState(todo.complete)
    const toggledone =()=> setIsComplete(!isComplete)
  return (
    <div className={isComplete? 'todo strike': 'todo'} >
        <RadioButtonUncheckedIcon onClick= {toggledone}/>
        {todo.task}
    </div>
  )
}

export default ToDo