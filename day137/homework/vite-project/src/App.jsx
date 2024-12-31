import React,{ useState } from 'react'


function App(){
  const [tasks,setTask] = useState([])

  
  function handleSubmit(e){
    e.preventDefault()
    const newTask = {
      id : Date.now(),
      name: e.target.task.value,
      category: e.target.categories.value,
      completed: false
    }
    setTask([newTask, ...tasks])
    
  }

  function remove(e){
    e.preventDefault()
    tasks.map((task,index) =>{
      setTask(tasks.splice(tasks[index],1))
    })
  }
  
  
  

  
  return(
    <main>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Add task' required name="task"/>
        <select name="categories" >
          <option value="Work">Work</option>
          <option value="personal_study">Personal study</option>
        </select>
         
        <button >Submit</button>
      </form>


      <ul>
        {
          tasks.map( (task,index) =>{
            return(
              <li key={index}>{task.name}, Category: {task.category} <button onClick={remove}>Delete</button></li>
            )
          })
          
        }

      </ul>
      
    </main>

    
  )
}
export default App
