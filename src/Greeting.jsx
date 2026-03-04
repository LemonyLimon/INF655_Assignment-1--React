//Modifying Greeting to accept a prop called username
const Greeting = ({ username }) => {
  const currentDate = new Date().toLocaleDateString();

  const paragraphStyle = {
    color: 'purple',
    fontSize: '22px'
  };

  return (
    <div>
      {/* Display the username prop inside the message */}
      <h1>Hello, {username}! Welcome to React!</h1>
      <p style={paragraphStyle}>Today's date is {currentDate}.</p>
    </div>
  );
};

export default Greeting;