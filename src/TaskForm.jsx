import { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Task Submitted:", taskName);
    setTaskName(''); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <h2>Add a Task</h2>
      <input 
        type="text" 
        placeholder="Enter Task Name" 
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;