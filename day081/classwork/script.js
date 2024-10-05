const form = document.getElementById("myForm")
const btn = document.getElementById("btn")

const data = []
function validateForm() {
    const firstName= form.elements.firstname.value
    const lastName = form.elements.lastname.value
    const emailValue = form.elements.email.value

    if(firstName == "" || lastName == "" || emailValue == "" ){
        alert("Invalid Inputs")
    }
    const acc ={
        firstname : firstName,
        lastname : lastName,
        email : emailValue
         
    }
    data.push(acc)
console.log(data)

}

console.dir(form)

