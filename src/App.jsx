import './App.css'
import Header from './components/Header';
import { useState } from 'react';
import {MyContext, MyContext2} from './context/MyContext';

function App() {
  const [tasks,setTasks]=useState([
    {id : 1, name: "Do laundry", description: "I've been POSTponing MALONEdry for far too long... get it?", completed: false},
    {id : 2, name: "Do homework", description: "Complete Erik's assignment, due to february 31st, 3987", completed: false},
    {id : 3, name: "Walk the dog", description: "Take Sparky for a walk at 6:00pm", completed: false},
    ]);
  
  return (
    <>
      <MyContext.Provider value={tasks}>
        <MyContext2.Provider value={setTasks}>
          <Header/>
        </MyContext2.Provider>
      </MyContext.Provider>
    </>
  )
}

export default App
