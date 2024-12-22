import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [elements, setElements] = useState([]);
  const [newElement, setNewElement] = useState('');

  
  const addElement = () => {
    if (newElement.trim()) {
      setElements([...elements, newElement]);
      setNewElement(''); 
    }
  };

  const deleteElement = (index) => {
    const updatedElements = elements.filter((i) => i !== index);
    setElements(updatedElements);
  };

  return (
    <div className="App">
      <h1>Element Manager</h1>
      
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Add new element"
          value={newElement}
          onChange={(e) => setNewElement(e.target.value)}
        />
        <button onClick={addElement}>Add Element</button>
      </div>

     
      <div className="elements-list">
        {elements.length === 0 ? (
          <p>No elements added yet.</p>
        ) : (
          elements.map((element, index) => (
            <div className="element-item" key={index}>
              <span>{element}</span>
              <button onClick={() => deleteElement(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;