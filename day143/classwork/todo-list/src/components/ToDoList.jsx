
import { useEffect,useState } from "react";


function ToDoList(){
    const [tasks,setTask] = useState([])


    

    function handleSubmit(e){
        e.preventDefault()
        setTask([...tasks,e.target.item.value])
        e.target.item.value = ""

    }

    function removeItem(index){
        let filtered = tasks.filter((_,i) => i !== index)
        setTask(filtered)
    }

    useEffect(() =>{
        const storedItems = JSON.parse(localStorage.getItem('tasks'))
        if(storedItems){
            setTask(storedItems);
        }
        
        
    },[])


    useEffect(() =>{
        if(tasks.length > 0){
            localStorage.setItem('tasks',JSON.stringify(tasks))
        }
       
    },[tasks])
    

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter the task" name="item" required/>
                <button>submit</button>
            </form>
        

            <ul>
                {
                    
                    tasks.map((task,index) =>{
                        return(
                            <li key={index} onClick={() => removeItem(index)}>{task}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ToDoList