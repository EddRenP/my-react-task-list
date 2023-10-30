import TaskList from "./TaskList";

function Task(){
    return (
    <div className="div-task-and-task-list">
        <div className="div-task">
            <p>Insert a chore to do next:</p>
            <input className="input-to-do" type="text" placeholder="To-do..."/>
            <button className="button-to-do">+</button>
        </div>
        <TaskList/>
    </div>);
}

export default Task;