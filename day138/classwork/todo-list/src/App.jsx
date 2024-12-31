import { useState } from 'react';

function App() {
  let [task,setTask] = useState([])

  const handleSubmit = (e) =>{
      e.preventDefault()
      const item = e.target.task.value
      setTask([...task,item])
  }


  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the task' required name='task'/>
        <button>Submit</button>
      </form>

      <ul>
        {
          task.map((item,index) =>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>

    </>
  )

}

export default App
