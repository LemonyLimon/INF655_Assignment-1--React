const Greeting = () => {
  const currentDate = new Date().toLocaleDateString();

  const paragraphStyle = {
    color: 'purple',
    fontSize: '22px'
  };

  return (
    <div>
      <h1>Hello World!</h1>
        <h1> Welcome To My First Ever React!</h1>
      <p style={paragraphStyle}>Today's date is:  {currentDate}.</p>
    </div>
  );
};

export default Greeting;