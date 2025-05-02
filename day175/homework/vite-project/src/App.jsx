import { useMemo, useState } from 'react'
import { calculateFactorial } from './utils/utilities'
import ChildComponent from './components/ChildComponents'

function App() {
  const [counter,setCounter] = useState(1)
  const [text,setText] = useState("")

  const updateText = (e) =>{
    e.preventDefault()
    setText(e.target.updated.value)
  }

  const factorial = useMemo(()=> calculateFactorial(counter),[counter])
  return (
    <>
      <p>Number: {counter}</p>
      <button onClick ={() => setCounter(prev => prev + 1)}>Add +1</button>

      <p>Factorial: {factorial}</p>

      <ChildComponent text={text}/>

      <form onSubmit={updateText}>
        <input type="text" name="updated" placeholder='Update text' />
        <button>Update</button>
      </form>
    </>
  )
}

export default App
