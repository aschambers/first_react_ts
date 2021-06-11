import React, { useState } from 'react';
import './NewTodo.css';

interface NewTodoProps {
  addTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = (todoText: string) => {
    props.addTodo(todoText);
    setTodoText('');
  }

  return (
    <div className='newTodo'>
      <p>Todo List</p>
      <input className='newTodo-value' type='text' onChange={(event) => { event.preventDefault(); setTodoText(event.target.value); }} value={todoText} />
      <button className='newTodo-button' onClick={() => { handleAddTodo(todoText); }}>ADD TODO</button>
    </div>
  );
}

export default NewTodo;
