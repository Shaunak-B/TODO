import React from 'react'
import "./ToDoList.css"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function ToDoList(props)  {
    let todoArr = props.todoArr === undefined ? [] : props.todoArr.length > 0 ? props.todoArr : JSON.parse(localStorage.getItem("todos"))
    const {completeTodo} = props
   
    return (
        <div className="list">
            <ul>
                {todoArr && todoArr.length > 0 ? todoArr.map((el,i) =>(
                    <li key={i}>
                        <div className = {el["done"] ? "line-through": null}>{el.title}</div>
                        <div className = "icon"> 
                            <IconButton> 
                                <CheckBoxIcon fontSize = 'large' onClick ={()=> completeTodo(i)} className ={`checkBoxButton ${el["done"] ? "green" : "blue"}`}  />
                            </IconButton>
                            <IconButton> 
                                <DeleteForeverIcon fontSize = 'large' className = "deleteButton"/>
                            </IconButton> 
                        </div>      
                    </li> 
                )) : null
                } 
            </ul>
        </div>
    )
}

export default ToDoList
