import Task from './Task';
import { useState } from 'react';
import {MyContext, MyContext2} from '../context/MyContext';

function Detail(){
    const [tasks,setTasks]=useState([
        {id : 1, name: "Do laundry", description: "I've been POSTponing MALONEdry for far too long... get it?", completed: false},
        {id : 2, name: "Do homework", description: "Complete Erik's assignment, due to february 31st, 3987", completed: false},
        {id : 3, name: "Walk the dog", description: "Take Sparky for a walk at 6:00pm", completed: false},
        ]);

    return (
        <div className="div-all">
            <div className="div-header">
                <MyContext.Provider value={tasks}>
                    <MyContext2.Provider value={setTasks}>
                        <Task/>
                    </MyContext2.Provider>
                </MyContext.Provider>
            </div>
        </div>
    );
}

export default Detail;