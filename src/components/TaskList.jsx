import { useState, useEffect } from "react";
import { useContext } from "react";
import {MyContext, MyContext2} from '../context/MyContext';

import { Divider, Stack, Button } from '@chakra-ui/react'
import { IconContext } from "react-icons";
import { MdEditDocument, MdDelete } from "react-icons/md";

const TaskList = () => {
    const tasks = useContext(MyContext);
    const setTasks = useContext(MyContext2);

    const [editTask, setEditTask] = useState()
    const updateLocalStorage = (updatedTasks) => {
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
          setTasks(storedTasks);
        }
      }, []);

      const editChore = (todo, newDescripcion) => {
        todo.name = newDescripcion;
        setEditTask(null);
        updateLocalStorage(tasks);
      };

      const editChore2 = (todo, newDescripcion) => {
        todo.description = newDescripcion;
        setEditTask(null);
        updateLocalStorage(tasks);
      };

      const checkedTask = (todo, newValue) => {
        todo.completed = newValue;
        updateLocalStorage(tasks);
        setStrikeThroughCSS((prev) => !prev);
        console.log(tasks);
      };

      const [strikeThroughCSS, setStrikeThroughCSS] = useState(false);
      
      const deleteTask= (todo) => {
        const updatedTasks = tasks.filter((task) => task.id !== todo.id); 
        setTasks(updatedTasks);
        updateLocalStorage(updatedTasks);
      };

    return (
        
    <div className="div-task-list">
        <IconContext.Provider value={{ color: "white", size: '35px', className: "global-class-name" }}>
        <Divider orientation='horizontal' />
            {tasks.toReversed().map((chore, index) => (
                <div key={chore.id}>
                    <div >
                    {editTask === chore ? (
                        <div className="task-list-content">
                            <div>
                                <input
                                className='input-update'
                                type="text"
                                defaultValue={chore.name}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                    editChore(chore, e.target.value);
                                    }
                                }}
                                />
                            </div>
                            <div>
                                <textarea
                                cols="25" 
                                rows="3"
                                className='text-update-description'
                                type="text"
                                defaultValue={chore.description}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                    editChore2(chore, e.target.value);
                                    }
                                }}
                                >
                                </textarea>
                            </div>
                        </div>  
                    ) : (
                        <div className="task-list-content">
                            <div className="task-list-content-left">
                                {chore.completed ? 
                                <input 
                                type="checkbox" 
                                className="task-check"
                                onClick={(e) => {checkedTask(chore, e.target.checked)}}  
                                defaultChecked/> 
                                : 
                                <input type="checkbox"
                                className="task-check"
                                onClick={(e) => {checkedTask(chore, e.target.checked)}} />}
                            </div>
                            <div className="task-list-content-center">
                                <span style={{ textDecoration : chore.completed ? 'line-through' : 'none'}}>
                                    <h2 className="task-name">{chore.name}</h2>
                                    <p className="task-description">{chore.description}</p>
                                </span>
                            </div>
                            <div className="task-list-content-right">
                                <Stack spacing={4} direction='row' align='center'>
                                    <Button colorScheme='blue' variant='solid' className="edit-task-list" onClick={() => setEditTask(chore)}><MdEditDocument /></Button>
                                    <Button colorScheme='red' variant='solid' className="delete-task-list" onClick={() => deleteTask(chore)}> <MdDelete /> </Button>
                                </Stack>
                            </div>
                        </div>
                    )}
                    <Divider orientation='horizontal' />
                    </div>
                </div>
            ))}
        </IconContext.Provider>
    </div>);
}

export default TaskList;
