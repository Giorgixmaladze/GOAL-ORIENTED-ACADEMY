import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Counter Application</h1>
    
      <p>The current count is: {count}</p>
      
    
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
