
import { BrowserRouter,Routes } from "react-router-dom";
import  {React,useState} from "react";
import * as ReactDOM from "react-dom";
 

function Home(props){

    const handleTitle = (e) =>{
        props.setTitle(e.target.value)
    }

    const handleDescription = (e) =>{
        props.setDescription(e.target.value)
    }

    const handleProgess= (e) =>{
        props.setProgress(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.setAllTodos([...props.allTodos, {title :props.title,
            description:props.description,
            progress:props.progress,
            id:Math.random()*1000}])
        props.setDescription('')
        props.setTitle('')
        props.setProgress('')

    }
    return(
        <div className='Todo'>
                <form className='formTodo'>
                <label>
                       Title:
                    <input type="text" name="name" onChange={handleTitle} value={props.title}/>
                </label>
                <br/>
                <br/>
                <label>
                       Description:
                    <input type="text" name="description"  onChange={handleDescription} value={props.description}/>
                </label>
                <br/>
                <br/>
                <select className='formSelect' onChange={handleProgess}>
                <option value="" selected disabled hidden>Select status</option>
                    <option value='not-started'>not-started</option>
                    <option value='in-progress'>in-progress</option>
                    <option value='done'>done</option>
                </select>
                <br/>
                <br/>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
                </form>
        </div>
    )
}

export default Home