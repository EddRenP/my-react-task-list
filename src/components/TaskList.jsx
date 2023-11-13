import { useState, useEffect } from "react";
import { useContext } from "react";
import {MyContext, MyContext2} from '../context/MyContext';

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
        <hr />
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
                                <button className="edit-task-list" onClick={() => setEditTask(chore)}>Edit</button>
                                <button className="delete-task-list" onClick={() => deleteTask(chore)}>Delete</button>
                            </div>
                        </div>
                    )}
                    <hr />
                    </div>
                </div>
            ))}
            

    </div>);
}

export default TaskList;
