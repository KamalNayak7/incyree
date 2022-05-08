import React from 'react'

const Todo = ({title,description,progress,id,eachTodo,allTodos,setAllTodos}) => {


    const handleDelete = () => {
            setAllTodos((allTodos).filter((el) => el.id !== eachTodo.id))
          
           
    }

    const handleComplete = ()=>{
        setAllTodos(allTodos.map((el) =>{
            if(el.id===eachTodo.id){
                return{
                    ...el ,completed :!el.completed
                }
            }
            return el;
        }
        
        ))
    }
    return (
        <div className='todo'>
                <li className={`todo-item ${eachTodo.completed ? 'completed' :''}`}>Title:{title}</li>
                        <p>Description:{description}</p>
                    <button className='done-btn' onClick={handleComplete}>
                        Done
                    </button>

                    <button className='trash-btn' onClick={handleDelete}>
                     Delete
                    </button>

                    <select className='select'>
                    <option value={progress}>{progress}</option>
                    <option value='not-started'>not-started</option>
                    <option value='in-progress'>in-progress</option>
                    <option value='done'>done</option>
                </select>
        </div>
    )
}

export default Todo
