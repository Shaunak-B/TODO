import React, {useState, useEffect} from 'react'
import "./CreateTodo.css"
import swal from "sweetalert"
import ToDoList from "./ToDoList"

function CreateTodo() {

    const [todo, setTodo] = useState({title: "", done: false})
    const [todoArr, setTodoArr] = useState([])
    let todos = localStorage.hasOwnProperty("todos") ? JSON.parse(localStorage.getItem("todos")): []
    useEffect(() => {
    }, [todoArr])

    const onChange = (event) => {
        let {value} = event.target
        let obj = {}
        obj["title"] = value
        obj["done"] = false
        setTodo(obj)
    }

    const createTodo = (event) =>{
        const {name} = event.target
        if(event.key === "Enter" || name === "addToDo"){
            if(todo.title !== ""){
                todos.unshift(todo)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodo({title:"", done: false})
            }else{
                swal("Oops", "Please write ToDo first","error");
            }
            
        }
    }

    const completeTodo = (i) => {
        if(todos[i]["done"] !== true){
            todos[i]["done"] = true
            localStorage.setItem("todos", JSON.stringify(todos))
            setTodoArr(todos)
            swal("Good Job", "Todo Completed","success");
        }
    }

    const deleteTodo = (i)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file",
            icon: "warning",
            buttons: true,
            dangermode: true
        }).then(res =>{
            if(res){
                todos.splice(i,1)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodoArr(todos)
            }
        })
    }

    return (
       <> 
            <div className = "box">
                <div className = "textEnd"> 
                    <h2>
                        React TODO APP
                    </h2>
                    <p> Add a new TODO</p>
                </div>
                <div className = "addAction">
                    <input type="text" name = "ToDo" placeholder = "Write here..." value = {todo.title} onKeyPress = {createTodo} onChange = {onChange}/>
                    <button className = "toDoButton" type="button" name="addToDo" onClick={createTodo}>Add ToDo</button>  
                </div>
            </div>
            <ToDoList todoArr = {todoArr} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        </>    
    );
}

export default CreateTodo
