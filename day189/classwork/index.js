import fs from "fs"


// //fs means file system

// const file = fs.readFileSync("./test/text.txt","utf8")
// console.log(file)

// fs.mkdirSync("./nika") --> creates folder

// const data = `I love goa`
// setTimeout(() =>{
//     fs.writeFileSync("./nika/index.js",JSON.stringify(data))
// },1000)

const dir = fs.readdirSync("../")
console.log(dir)