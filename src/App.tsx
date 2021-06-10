import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';

const App: React.FC = () => {
  // ---------------------------------------------------

  // type Todo = {
  //   id: number;
  //   text: string;
  // };

  // const initialTodos: Todo[] = [
  //   {
  //     id: 0,
  //     text: 'Finish the course'
  //   }
  // ];

  // const [todos, setTodos] = useState(initialTodos);

  // ---------------------------------------------------

  // const initialTodos: { id: number, text: string }[] = [
  //   {
  //     id: 0,
  //     text: 'Finish the course'
  //   }
  // ];

  // const [todos, setTodos] = useState(initialTodos);

  // ---------------------------------------------------

  const [todos, setTodos] = useState([{ id: 0, text: 'Finish the course' }]);

  const addTodo = (todoValue: string) => {
    setTodos(todos.concat({ id: todos.length, text: todoValue } ));
    // another way to add to the todos array
    // setTodos(todos => [...todos, { id: todos.length, text: todoValue }]);
  }

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId ));
  }

  return (
    <div className="App">
      <NewTodo
        addTodo={(newTodo: string) => { addTodo(newTodo); }}
      />
      <TodoList
        items={todos}
        deleteTodo={(todoId: number) => { deleteTodo(todoId); }}
      />
    </div>
  );
}

export default App;
