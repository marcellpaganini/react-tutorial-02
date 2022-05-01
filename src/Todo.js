import React from 'react'

export default function Todo({ todo, toggleTodo, toggleImportant }) {

  const handleTodoClick = () => {
      toggleTodo(todo.id);
  }

  const handleToggleImportant = () => {
    toggleImportant(todo.id);
  }

  return (
    <div>
        <label>
            <input type="checkbox" checked={ todo.complete } onChange={ handleTodoClick }></input>
            { todo.name } 
            <button className="important" title={ todo.important ? "Untag as important." : "Tag as important." } onClick={ handleToggleImportant }>{ todo.important ? "⭐" : "🔘" }</button>
        </label>
    </div>
  )
}