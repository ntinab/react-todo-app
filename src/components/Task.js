import React from 'react'

const Task = ({ task, index, handleUpdate, handleDelete }) => {
  
  return (
    <div>
      <span>{task.text}</span>
      <input
        onChange={(e) => handleUpdate(index, e.target.checked)}
        type="checkbox"
        checked={task.checked}
        className="custom-checkbox"
      />
      <small onClick={() => handleDelete(index)}>Delete</small>
    </div>
  );
};

export default Task;