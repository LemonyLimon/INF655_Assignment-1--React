import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px', border: '1px solid #37804a', padding: '10px', backgroundColor: '#96d8b7', color: 'cream' }}>
      <h2>Counter Box</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
};

export default Counter;