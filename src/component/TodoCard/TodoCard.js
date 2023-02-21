import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete'; 
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';



import './TodoCard.css'
import { blue, green, red } from '@mui/material/colors';

const TodoCard = (props) => {
    return (
        <div className='card-wrapper'>
            <Card sx={{ maxWidth: 345 }} >

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div className="card-rightcontainer"> 
                    {props.isCompleted === false ? <EditIcon sx={{ color: blue[500] }}  onClick={()=>props.EditIcon(props.id)}/>:<></>}
                    {props.isCompleted === false ? <CheckIcon sx={{ color: green[500] }} onClick={()=>props.CheckIcon(props.id)} />:<></>}
                    <DeleteIcon sx={{ color: red[500] }} onClick={()=>props.DeleteIcon(props.id)} />
                    </div>
                </CardActions>
            </Card>
            </div>
    )
}

export default TodoCard

