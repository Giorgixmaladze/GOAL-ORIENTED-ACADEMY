import React,{useState} from "react";


function GradeTracker() {
    const [students,setStudents] = useState([])
    const [grades,setGrade] = useState([])

    function addStudent(e){
        e.preventDefault()
        const student = {
            id : Date.now(),
            name : e.target.name.value,
            grade : e.target.grade.value
        }
        setStudents([...students,student])

        setGrade([...grades,student.grade])


        
        
    }

    function average(){
        let sum = grades.reduce((accumulator,currValue) => Number(accumulator) + Number(currValue), 0 )
        return sum / grades.length
    }


    return(
        <main>
            <form onSubmit={addStudent}>
                <input type="text" placeholder="Enter student's name" required name="name"/>
                <input type="number" placeholder="Enter students grade" required name = "grade" />
                <button>Submit</button>
            </form>


            <ul>
                {
                    students.map((student,index) =>{
                        return (
                            <li key={index}>Name: {student.name} - Grade: {student.grade}-
                            {
                                student.grade >= 50 ? "Good" : "Bad"
                            }
                            </li>
                        )
                    })
                }
            </ul>

            {
                grades.length > 0? <p>Average grade: {average()}</p> : <p>Average grade: 0</p>
            }
        </main>
    )
}

export default GradeTracker