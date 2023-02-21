import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



import './App.css';
//import data from './Utlis/Dataset'
import TodoCard from './component/TodoCard/TodoCard';
import blue from '@mui/material/colors/blue';


function App() {
  const [toDos, setToDos] = useState([])
  const [newTitle, setNewTitle] = useState('')

  useEffect(()=>{
    let data = localStorage.getItem("data")
    if(data){
      setToDos(JSON.parse(data))
    }
},[])

  const addHandler =()=>{
    let newTodo = {  
      id: Math.random(),
      title: newTitle,
      isCompleted: false,
      isDeleted: false
  }
  toDos.push(newTodo) 
  setToDos([...toDos]) 

    localStorage.setItem("data",JSON.stringify(toDos)) 
  }
 
  const EditIconHandler =(id)=>{
    const todo = toDos.find(e => e.id === id);
    todo.isEditIcon = newTitle
    setToDos([...toDos])
    localStorage.setItem("data",JSON.stringify(toDos))
  } 
  const CheckIconHandler =(id)=>{
    const todo = toDos.find(e => e.id === id);
    todo.isCheckIcon = true
    setToDos([...toDos])
    localStorage.setItem("data",JSON.stringify(toDos))
  } 
  
  const DeleteIconHandler =(id)=>{
    const todo = toDos.find(e => e.id === id);
    todo.isDeleteIcon = true
    setToDos([...toDos])
    localStorage.setItem("data",JSON.stringify(toDos)) 
  }

  return (
    <div className='main-container'>
      <div className='input-container'>
        <Box

          sx={{
            '& > :not(style)': { m: 1, width: '60ch', backgroundcolor: blue[500] },
          }} 
          noValidate
          autoComplete="off">

            <TextField id="outlined-basic" 
            label="Enter Task" 
            variant="outlined" 
            onChange={(data)=>setNewTitle(data.target.value)} />
        </Box>
        <Fab color="primary" aria-label="add">
        <AddIcon  onClick={addHandler}/>
          </Fab>
      </div>
      <div className='output-container'>
        <div className='card-container'>
          <h4>Pending</h4>
          <div className='card-list'>
          {
              toDos?.map((e) => {
                if(!e.isCheckIcon) {
                  return(
                  <div>
                    {!e.isDeleteIcon && 
                     <TodoCard key={e.id} title={e.title} id= {e.id}  CheckIcon={CheckIconHandler} EditIcon={EditIconHandler} isCompleted={e.isCompleted} DeleteIcon= {DeleteIconHandler}/>}
                     </div>
                     )
                } else {
                  return <></>
                }
              })
            } 
          </div>
        </div>
        <div className='card-container'>
          <h4>Completed</h4>
          <div className='card-list'>
          {
              toDos?.map((e) => {
                if(e.isCheckIcon) {
                   return (!e.isDeleteIcon && <TodoCard key={e.id} id={e.id} title={e.title} isCheckIcon={e.isCheckIcon} DeleteIcon={DeleteIconHandler}/>) 
                } else {
                  return<></>
                }
              })
            }
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
