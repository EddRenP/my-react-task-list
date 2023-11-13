import { useState, useEffect} from 'react';

function useAddtask(){
    const tasks = useContext(MyContext);
    const setTasks = useContext(MyContext2);
    
    const[val,setVal] = useState('');
    const[val2,setVal2] = useState('');

    if (localStorage.id == 0 || localStorage.id == null || localStorage.id == ""){
        localStorage.setItem("id", 3);
    }

    let index = localStorage.getItem("id");
    
    const[taskIdCounter, setTaskIdCounter] = useState(parseInt(index));


    
    const agregarElemento =()=>{
        setTasks([...tasks,{id : taskIdCounter + 1, name: val, description: val2, completed : false}]);
        setTaskIdCounter(taskIdCounter + 1);
        localStorage.setItem("tasks", JSON.stringify([...tasks,{id : taskIdCounter + 1, name: val, description: val2, completed : false}]));
        localStorage.setItem("id", parseInt(taskIdCounter+1));
        setVal('');
        setVal2('');
    }
}

export default useAddtask;