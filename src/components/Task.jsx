import TaskList from "./TaskList";
import { useState, useEffect } from "react";
import { useContext } from "react";
import {MyContext, MyContext2} from '../context/MyContext';

function Task(){
    const tasks = useContext(MyContext);
    const setTasks = useContext(MyContext2);
    
    const[val,setVal] = useState('');
    const[val2,setVal2] = useState('');
    const [error,setError] = useState("");

    if (localStorage.id == 0 || localStorage.id == null || localStorage.id == ""){
        localStorage.setItem("id", 3);
    }

    let index = localStorage.getItem("id");
    
    const[taskIdCounter, setTaskIdCounter] = useState(parseInt(index));

    const changeTxt = event => {
        setVal(event.target.value)
    }

    const changeTxt2 = event => {
        setVal2(event.target.value)
    }
    
    const addElement =()=>{
        setTasks([...tasks,{id : taskIdCounter + 1, name: val, description: val2, completed : false}]);
        setTaskIdCounter(taskIdCounter + 1);
        localStorage.setItem("tasks", JSON.stringify([...tasks,{id : taskIdCounter + 1, name: val, description: val2, completed : false}]));
        localStorage.setItem("id", parseInt(taskIdCounter+1));
        setVal('');
        setVal2('');
    }

    useEffect(() => {
        if(val.length<=3&&val.length>0) {
            setError("Task name is too short!");
        } else if (val.length>20){
            setError("Task name is too large!");
        } else if (val.length==0){
            setError(" ");
        } else {
            setError("");
        }
    }, [val]);

    const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Form sent");
    }

    return (
    <div className="div-task-and-task-list">
        <div className="div-task">
            <form onSubmit={handleSubmit}>
                <div className="div-task-name-description">
                    <div className="div-task-name">
                        <p>Task name:</p>
                        <input className="input-to-do" type="text" minLength={3} placeholder="To-do..." onChange={changeTxt} value={val}/>
                    </div>
                    <div className="div-task-description">
                        <p>Description:</p>
                        <textarea cols="25" rows="3" className="text-to-do-description" type="text" placeholder="Describe it..." onChange={changeTxt2} value={val2}></textarea>
                    </div>
                </div>
                <div className="div-task-add-button">
                {error&&<p className="add-task-error">{error}</p>}
                    <button type="submit" className="button-to-do" onClick={addElement} disabled={error}>Add</button>
                </div>
            </form>
        </div>
        <MyContext.Provider value={tasks}>
            <MyContext2.Provider value={setTasks}>
                <TaskList/>
            </MyContext2.Provider>
        </MyContext.Provider>
    </div>);
}

export default Task;