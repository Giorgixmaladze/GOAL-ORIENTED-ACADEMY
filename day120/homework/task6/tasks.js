

function add(task,isCompleted){
    let arr =[];
    class Tasks{
        constructor(text, completed){
            this.text = text;
            this.completed = completed
        }
    }
    const tsk = new Tasks(task,isCompleted)
    arr.push(tsk)
    console.log(arr)
}

export {add}







