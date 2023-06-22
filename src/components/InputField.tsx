import React from 'react'
import './Styles.css'


interface props{
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e:React.FormEvent)=> void
}

function InputField( {todo, setTodo, handleAdd} : props) {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input 
      type="input" 
      placeholder='enter a task' 
      className='input_box' 
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      
      />
      <button className='input_submit' type='submit'>
        Go
      </button>
    </form>
  )
}

export default InputField
