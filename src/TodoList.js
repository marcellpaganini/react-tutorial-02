import React from 'react';
import Todo from './Todo';
import './TodoList.css';

export default function TodoList({ todos, toggleTodo, toggleImportant }) {
  return (
    todos.map(todo => {
        return <Todo key={ todo.id } toggleTodo={ toggleTodo } toggleImportant={ toggleImportant } todo={ todo } />
    })
  )
}
