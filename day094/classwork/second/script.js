function person(name,age){
    this.name = name;
    this.age = age;
}

const me = new person("Giorgi", 17)

const mother = new person("maka",40)
const father = new person("Temo",42)
const friend = new person("saba", 17)
const arr = []

arr.push(me,mother,father,friend)






const adults = arr.filter(person =>{
    return person.age >= 18 
})


const minors = arr.filter(person => {
    return person.age < 18
})



console.log(adults)
console.log(minors)








function myFilter(arr, condition) {
    const filteredArr = [];
    for (const item of arr) {
      if (condition(item)) {
        filteredArr.push(item);
      }
    }
    return filteredArr;
  }
  
  // Usage:
  const adultsClone = myFilter(arr, person => person.age >= 18);
  const minorsClone = myFilter(arr, person => person.age < 18);
  
  
  
  
  console.log(adultsClone)
  console.log(minorsClone)