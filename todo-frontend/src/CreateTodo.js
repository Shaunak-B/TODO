import React from 'react'
import "./CreateTodo.css"

function CreateTodo() {
    return (
        <div className = "box">
            <div className = "textEnd"> 
                <h2>
                    React TODO APP
                </h2>
                <p> Add a new TODO</p>
            </div>
            <div className = "addAction">
                <input type="text" name = "ToDo" placeholder = "Write here..."/>
                <button className = "toDoButton" type="button" name="addToDo">Add ToDo</button>  
            </div>
            
        </div>
    )
}

export default CreateTodo
