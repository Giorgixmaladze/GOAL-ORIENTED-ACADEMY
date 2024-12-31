import React,{ useState } from 'react'

function App() {
  let [count,setCount] = useState(0)

  const handleClick = () =>{
    setCount(count + 1)
  }

  return(
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    
    </>
  )
}

export default App
