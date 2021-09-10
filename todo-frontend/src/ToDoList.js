import React from 'react'
import "./ToDoList.css"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function ToDoList() {
    return (
        <div className="list">
            <ul>
                <li>
                    <div>Hopping</div>
                    <div className = "icon"> 
                        <IconButton> 
                            <CheckBoxIcon fontSize = 'large' className = "checkBoxButton"/>
                        </IconButton>
                        <IconButton> 
                            <DeleteForeverIcon fontSize = 'large' className = "deleteButton"/>
                        </IconButton> 
                    </div>      
                </li>
                <li>
                    <div>Walking</div>
                    <div className = "icon"> 
                        <IconButton> 
                            <CheckBoxIcon fontSize = 'large' className = "checkBoxButton"/>
                        </IconButton>
                        <IconButton> 
                            <DeleteForeverIcon fontSize = 'large' className = "deleteButton"/>
                        </IconButton> 
                    </div>      
                </li>
                <li>
                    <div>running</div>
                    <div className = "icon"> 
                        <IconButton> 
                            <CheckBoxIcon fontSize = 'large' className = "checkBoxButton"/>
                        </IconButton>
                        <IconButton> 
                            <DeleteForeverIcon fontSize = 'large' className = "deleteButton"/>
                        </IconButton> 
                    </div>      
                </li>
            </ul>
        </div>
    )
}

export default ToDoList
