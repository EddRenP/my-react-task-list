import TaskList from "./TaskList";
import { useState } from "react";

function Task({tasks, setTasks}){
    
    const[val,setVal] = useState('');

    if (localStorage.id == 0 || localStorage.id == null || localStorage.id == ""){
        localStorage.setItem("id", 3);
    }

    let index = localStorage.getItem("id");
    
    const[taskIdCounter, setTaskIdCounter] = useState(parseInt(index));

    const changeTxt = event => {
      setVal(event.target.value)
    }
    
    const agregarElemento =()=>{
        setTasks([...tasks,{id : taskIdCounter + 1, name: val, completed : false}]);
        setTaskIdCounter(taskIdCounter + 1);
        localStorage.setItem("tasks", JSON.stringify([...tasks,{id : taskIdCounter + 1, name: val, completed : false}]));
        localStorage.setItem("id", parseInt(taskIdCounter+1));
        setVal('');
    }
    return (
    <div className="div-task-and-task-list">
        <div className="div-task">
            <p>Insert a task to do next:</p>
            <input className="input-to-do" type="text" placeholder="To-do..." onChange={changeTxt} value={val}/>
            <button className="button-to-do" onClick={agregarElemento}>+</button>
        </div>
        <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>);
}

export default Task;