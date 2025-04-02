import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const getCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={getCount}>Count</button>
    </>
  );
}

export default App;
