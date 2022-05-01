import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])
  
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false, important: false }]
    })
    todoNameRef.current.value = null;
  }

  const handleClearTodos = () => {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  const toggleImportant = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.important = !todo.important;
    setTodos(newTodos);
  }

  return (
    <>
      <h1>To Do App</h1>
      <TodoList todos={ todos } toggleTodo={ toggleTodo } toggleImportant={ toggleImportant } />
      <input ref={ todoNameRef } type="text" />
      <button onClick={ handleAddTodo }>Add Todo</button><br />
      <button onClick={ handleClearTodos }>Clear Complete</button>
      <div className="left">{todos.filter(t => t.complete === false).length} left to do.</div>
    </>
  )
}

export default App;