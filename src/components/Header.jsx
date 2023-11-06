import Task from "./Task";

function Header({tasks, setTasks}){
    return (
    <div className="div-all">
        <div className="div-header">
            <h1>To do List</h1>
        </div>
        <Task tasks={tasks} setTasks={setTasks}/>
    </div>);
}

export default Header;