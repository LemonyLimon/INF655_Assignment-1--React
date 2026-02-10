import Greeting from './Greeting';
import UserInfo from './UserInfo';

function App() {
//Creating an array of tasks to randomly select from
  const tasks = ["Sing Off Key", "Walk Ori", "Practice React", "Plan Next Getaway", "Read a Book", "Mediate"];
  const getRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  };

  return (
   //Styling the main container, centering the content and adding a background color
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center', 
      minHeight: '100vh',
      width: '100vw',
      padding: '20px' ,
      backgroundColor: '#3cb371'//green background color
    }}>
      {/*Rendering child components */}
      <Greeting />
      <UserInfo />
      
      {/* Displaying the random task */}
      <h3>Random Task for Today: {getRandomTask()}</h3>
    </div>
  );
}

export default App;