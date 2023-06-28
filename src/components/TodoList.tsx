import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

import './Styles.css'


interface props {
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos : Todo[];
    setCompletedTodos :  React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({todos , setTodos, completedTodos, setCompletedTodos }:props) => {
  return (
    <div className='container'>
        <Droppable droppableId='TodosList'>

            {
                (provided, snapshot)=>(
                    <div className={`todos ${snapshot.isDraggingOver?'dragActive':""}`} ref={provided.innerRef} 
                    {...provided.droppableProps}>
        <span className="todos_heading">
            Active tasks
            </span>
            {
        todos.map((todo, index)=>(
           <SingleTodo 
           index={index}
           todo = {todo}
           key = {todo.id}
           todos = {todos}
           setTodos = {setTodos}
           
           />
        ))}
        {provided.placeholder}

      </div>

                )
            }

        
        </Droppable>
        <Droppable droppableId='TodosRemove'>
            {
                (provided, snapshot)=>(
                    <div className={`todos remove ${snapshot.isDraggingOver ? 'dragRemove': ''}` }  ref={provided.innerRef} 
                    {...provided.droppableProps}>
      <span className="todos_heading">
            Completed tasks
            </span>
            {
        completedTodos.map((todo, index)=>(
           <SingleTodo 
           index={index}
           todo = {todo}
           key = {todo.id}
           todos = {completedTodos}
           setTodos = {setCompletedTodos}
           
           />
        ))}
        {provided.placeholder}
      </div>

                )
            }
        

        </Droppable>
      
     
    </div>
  )
}

export default TodoList
