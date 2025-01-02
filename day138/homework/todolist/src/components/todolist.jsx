import React,{useState} from "react"

function ToDoList() {
    const [items,setItems] = useState([])
    function addItems(e){
        e.preventDefault()
        let item = e.target.task.value
        
        setItems([...items,item])
        console.log(items)
        e.target.task.value = ""

    }


    function removeTask(index){
        const filteredArr = items.filter((_,i) => i !== index)
        setItems(filteredArr)
    }
    
    
    return(
        <main>
            <form onSubmit={addItems}>
                <input type="text" name="task" placeholder="Enter the task"/>
                <button>Submit</button>
            </form>


            <ul>
                {
                    items.map((item,index) => {
                        return <li key={index} onClick={() => removeTask(index)}>{item}</li>
                    })
                }
            </ul>
        </main>



    )
} 

export default ToDoList;