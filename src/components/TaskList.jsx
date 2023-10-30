
function TaskList(){
    return (
    <div className="div-task-list">
        <ul>
            <li><input type="checkbox" /> Do homework <button className="edit-task-list">E</button> <button className="delete-task-list">D</button></li>
            <hr />
            <li><input type="checkbox" /> Walk the dog <button className="edit-task-list">E</button> <button className="delete-task-list">D</button></li>
            <hr />
            <li><input type="checkbox" /> Do the laundry <button className="edit-task-list">E</button> <button className="delete-task-list">D</button></li>
            <hr />
        </ul>
    </div>);
}

export default TaskList;