import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [inputValue, setInputValue] = useState();
  const [items, setItems] = useState([]);  


  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter the text"
      />
      
  
      <button onClick={handleAddItem}>Add</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;