import TaskList from "./TaskList";
import { useState, useEffect } from "react";
import { useContext } from "react";
import {MyContext, MyContext2} from '../context/MyContext';

import { IconContext } from "react-icons";
import { IoIosAddCircle } from "react-icons/io";
import { Button, Input, Textarea } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

function Task(){
    const tasks = useContext(MyContext);
    const setTasks = useContext(MyContext2);
    
    const[val,setVal] = useState('');
    const[val2,setVal2] = useState('');
    const [error,setError] = useState("");
    const valinput = true;

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
        <IconContext.Provider value={{ color: "white", size: '35px', className: "global-class-name" }}>
        <div className="div-task">
            <form onSubmit={handleSubmit}>
                <div className="div-task-name-description">
                    <div className="div-task-name">
                        <p>Task name:</p>
                        <Input focusBorderColor='lime' variant='filled' size='lg' className="input-to-do" type="text" minLength={3} placeholder="To-do..." onChange={changeTxt} value={val}/>
                    </div>
                    <div className="div-task-description">
                        <p>Description:</p>
                        <Textarea resize={"none"} focusBorderColor='lime' variant='filled' cols="25" rows="3" className="text-to-do-description" type="text" placeholder="Describe it..." onChange={changeTxt2} value={val2}></Textarea>
                    </div>
                </div>
                <div className="div-task-add-button">
                {error!=0&&<Alert status='error'>
                            <AlertIcon />
                            <AlertTitle>Something is wrong with the name!</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>}
                    <Button colorScheme='green' variant='solid' type="submit" className="button-to-do" onClick={addElement} isDisabled={error}><IoIosAddCircle /></Button>
                </div>
            </form>
        </div>
        </IconContext.Provider>
        <MyContext.Provider value={tasks}>
            <MyContext2.Provider value={setTasks}>
                <TaskList/>
            </MyContext2.Provider>
        </MyContext.Provider>
    </div>);
}

export default Task;