import Task from "./Task";

function Header(){

    return (
    <div className="div-all">
        <div className="div-header">
            <h1>To do List</h1>
                <Task/>
        </div>
        
    </div>);
}

export default Header;