import Greeting from './Greeting';
import UserInfo from './UserInfo';
import Counter from './Counter';
import TaskForm from './TaskForm';

function App() {
  // Task 3: Array of 5 tasks for the list
  const taskList = ["Sing Off Key", "Walk Ori", "Practice React", "Plan Next Getaway", "Read a Book"];

  // Task 4: Function to show an alert
  const handleAlert = () => {
    alert("Hello from Melanie's React App!");
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center', 
      minHeight: '100vh',
      width: '100vw',
      padding: '20px' ,
      backgroundColor: '#3cb371'
    }}>
      {/*Rendering Greeting twice with different usernames */}
      <Greeting username="Margaret Owen" />
      <Greeting username="Samantha Sotto Yambao" />
      
      {/* Render the Counter component */}
      <Counter />

      {/*Display a list of tasks using .map() and unique keys */}
      <div style={{ margin: '20px' }}>
        <h3>My Weekly Tasks:</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {taskList.map((task, index) => (
            <li key={index}>- {task}</li>
          ))}
        </ul>
      </div>

      {/* Passing the handleAlert function as a prop to UserInfo */}
      <UserInfo handleClick={handleAlert} />

      {/* Rendering the TaskForm component */}
      <TaskForm />
    </div>
  );
}

export default App;