import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;