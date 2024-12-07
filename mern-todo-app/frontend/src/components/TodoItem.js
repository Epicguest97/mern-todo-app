import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, fetchTodos }) => {
  const toggleComplete = async () => {
    await axios.put(`http://localhost:5001/api/todos/${todo._id}`, { isCompleted: !todo.isCompleted });
    fetchTodos();
  };

  const deleteTodo = async () => {
    await axios.delete(`http://localhost:5001/api/todos/${todo._id}`);

    fetchTodos();
  };

  return (
    <div>
      <span
        style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
        onClick={toggleComplete}
      >
        {todo.task}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
