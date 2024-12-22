import React, { useState } from 'react';

function App() {
  
  const [inputValue, setInputValue] = useState(''); 
  const [items, setItems] = useState([]); 

  
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]); 
      setInputValue(''); 
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

     
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task"
      />

     
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
}

export default App;