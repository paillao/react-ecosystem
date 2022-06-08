import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed }) => (
  <div className='todo-item-container'>
    <h3>{todo.text}</h3>
    <div className='buttons-container'>
      <button className='completed-button'>Completado</button>
      <button
        onClick={() => onRemovePressed(todo.text)}
        className='remove-button'
      >
        Eliminar
      </button>
    </div>
  </div>
);

export default TodoListItem;
