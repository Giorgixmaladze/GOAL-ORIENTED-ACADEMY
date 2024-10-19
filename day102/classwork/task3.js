const person = new Map([
    ["Giorgi",17],
    ["Luka" ,18]
    ])


function myFunc(name){
    return person.has(name)
}

console.log(myFunc("saba"))