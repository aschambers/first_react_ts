import React from 'react';
import './TodoList.css';

interface TodoListProps {
  items: { id: number, text: string }[];
  deleteTodo: (todoId: number) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  const handleDeleteTodo = (todoId: number) => {
    props.deleteTodo(todoId);
  }

  return (
    <ul
      key={props.items.length}
      className='todoList'
    >
      {props.items.map((todo) => {
        return (
          <li
            key={todo.id}
            className='todoItem'
          >
            <span className='todoItem-text'>{todo.text} </span>
            <button className='todoItem-delete' onClick={() => { handleDeleteTodo(todo.id); }}>DELETE</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
