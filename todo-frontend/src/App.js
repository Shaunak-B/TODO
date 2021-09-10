import './App.css';
import CreateTodo from "./CreateTodo"
import ToDoList from "./ToDoList"

function App() {
  return (
    <div className = "outerBox">
      <CreateTodo />
      <ToDoList/>
    </div>

  );
}

export default App;
