
let user = [
    {id: 5,name : "giorgi"},
    {id:6, name : "saba"}
]


const objMap = new Map();

user.forEach(obj => {
    objMap.set(obj.id,obj)
})


console.log(objMap)
