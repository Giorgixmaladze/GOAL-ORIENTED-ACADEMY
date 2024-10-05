let input;
let pass = "12345"
let attempts = 3
while(input !== pass){
    input = prompt("enter the password")

    alert("you have" + " " + attempts + " " + "attempts left")
    attempts -- 
    if(attempts === 0){
        alert("you have no attempts left")
    break
        
    }
    if(input === pass){
        alert("access granted")
    }
}

