import { useState, useEffect } from "react";

const TaskList = ({tasks, setTasks}) => {

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

      const editarTarea = (tarea, newDescripcion) => {
        tarea.name = newDescripcion;
        setEditTask(null);
        updateLocalStorage(tasks);
      };

      const checkedTask = (tarea, newValue) => {
        tarea.completed = newValue;
        updateLocalStorage(tasks);
        setStrikeThroughCSS((prev) => !prev)
        console.log(tasks);
      };

      const [strikeThroughCSS, setStrikeThroughCSS] = useState(false);
      
      const eliminarTarea = (tarea) => {
        const updatedTasks = tasks.filter((task) => task.id !== tarea.id); 
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
                            <input
                            className='input-update'
                            type="text"
                            defaultValue={chore.name}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                editarTarea(chore, e.target.value);
                                }
                            }}
                            />
                        </div>  
                    ) : (
                        <div className="task-list-content">
                            {chore.completed ? 
                            <input type="checkbox" onClick={(e) => {checkedTask(chore, e.target.checked)}}  defaultChecked/> 
                            : <input type="checkbox" onClick={(e) => {checkedTask(chore, e.target.checked)}} />}
                            <div className="task-list-content-left">
                                <span style={{ textDecoration : chore.completed ? 'line-through' : 'none'}}><p className="task-name">{chore.name}</p></span>
                            </div>
                            <div className="task-list-content-right">
                                <button className="edit-task-list" onClick={() => setEditTask(chore)}>Edit</button>
                                <button className="edit-task-list" onClick={() =>  eliminarTarea(chore)}>Delete</button>
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
