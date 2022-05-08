import React from 'react'
import Todo from './Todo'


const TodoList = ({allTodos,setAllTodos}) => {
    // console.log(props.allTodos)

    return (
        <div className='todo-container'>
            <ul className='todo-ul'>
                  {
                      allTodos.map(todo =>(
                          <Todo title={todo.title}
                            allTodos={allTodos}
                            setAllTodos = {setAllTodos}
                            eachTodo = {todo}
                            description={todo.description}
                            progress={todo.progress}
                            key={todo.id}/>
                      ))
                  }
            </ul>
        </div>
    )
}

export default TodoList
