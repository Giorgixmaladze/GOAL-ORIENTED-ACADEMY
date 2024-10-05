const form = document.getElementById("myForm");
const btn = document.getElementById("btn")


function validateForm(){
    const fullname = form.elements.fullname.value
    const emailValue = form.elements.email.value
    const passValue = form.elements.password.value
    const color = form.elements.color.value

    if( fullname == ""  || emailValue == "" || passValue == "" || color == ""){
        alert("please fill all fields")
        return;
    }
    console.log("form submitted succesfully")




    console.log("Full name" + fullname)
    console.log("Email : " + emailValue)
    console.log("Password : " + passValue)
    console.log("Favourite color" + color)

}

console.dir(form.elements.fullname)
