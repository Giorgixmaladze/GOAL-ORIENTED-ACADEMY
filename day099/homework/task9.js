/* Define a Student class with a static method
 compareGrades(student1, student2) that compares the grades of two student instances.*/


 class Student {
    static CompareGrades(student1,student2){
        if(student1 === student2){
            console.log("both are good")
        }else if(student1 > student2){
            console.log("student1 better than student2")
        }else if(student2> student1){
            console.log("student2 is better than student1")
        }
    }
 }


Student.CompareGrades(55,70)