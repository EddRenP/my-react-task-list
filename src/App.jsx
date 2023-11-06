import './App.css'
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [tasks,setTasks]=useState([
    {id : 1, name: "Do homework", completed: false},
    {id : 2, name: "Walk the dog", completed: false},
    {id : 3, name: "Do laundry", completed: false},
  ]);
  
  return (
    <>
      <Header tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
