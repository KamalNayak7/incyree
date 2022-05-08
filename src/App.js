
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  React,{useState} from "react";
import * as ReactDOM from "react-dom";
import Home from './Components/Home' 
import TodoList from './Components/TodoList'

function App() {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [progress,setProgress] = useState('not-started');
  const [allTodos, setAllTodos] = useState([])
  
  
  return (
    <div className="App">
             <header>
                <h1>Incyree todo app</h1>
            </header>
        <Home setTitle ={setTitle}
              setDescription ={setDescription}
              allTodos={allTodos}
              setAllTodos ={setAllTodos}
              title={title}
              description={description}
              progress={progress}
              setProgress={setProgress}
        />
        <TodoList allTodos={allTodos} setAllTodos={setAllTodos}/>

      
    </div>
  );
}

export default App;
