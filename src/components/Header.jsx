import Task from "./Task";

function Header(){
    return (
    <div className="div-all">
        <div className="div-header">
            <h1>To-do List</h1>
            <div>User: Edd</div>
        </div>
        <Task/>
    </div>);
}

export default Header;