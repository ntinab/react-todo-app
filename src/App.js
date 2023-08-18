import React, { useState } from 'react'
import Task from './components/Task'
import './App.css'

function App() {

const [tasks, setTasks] = useState([
    { text: 'Go to gym', checked: true },
    { text: 'Drink coffee', checked: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskText = e.target.task.value;
    
    if (newTaskText.trim() !== '') {
      const newTask = { text: newTaskText, checked: false };
      setTasks([...tasks, newTask]);
      e.target.task.value = '';
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleUpdate = (index, checked) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='app'>
      <main>
        <form onSubmit={handleSubmit}>
          <span> <input type="text" name="task" /> </span> 
          <span> <button type="submit">Add Task</button> </span>
        </form>
        {tasks.map((todoItem, index) => (
          <Task
            key={index}
            task={todoItem}
            index={index}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </main>
    </div>
    
  )
}
    
export default App;