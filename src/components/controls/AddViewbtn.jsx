import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

const AddViewbtn = () => {
    return (
        <div>
            <Link to='/add'><AddIcon /></Link>
            <Link to='/view'><AssignmentOutlinedIcon /></Link>
        </div>
    )
}

export default AddViewbtn