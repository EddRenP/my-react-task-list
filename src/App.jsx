import './App.css'
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { lazy, Suspense } from 'react';
import Error from "./components/Error";
import ToggleColorMode from './components/ToggleColorMode';



const Home = lazy(() => import("./components/Home"));
const Detail = lazy(() => import("./components/Detail"));
const About = lazy(() => import("./components/About"));

function App() {
  
  return (
    <>
    <ToggleColorMode/>
    <div>
      
        <BrowserRouter>
        <Header/>
        <Suspense fallback={<h1>Cargando....</h1>}>
          <Routes>
            <Route path="/about" Component={About}/>
            <Route path="/" Component={Home}/>
            <Route path="/detail" Component={Detail}/>
            <Route path="*" Component={Error}/>
          </Routes>
        </Suspense>
        </BrowserRouter>
      
      </div>
    </>
  )
}

export default App
