
import fs from 'fs';


fs.writeFileSync('cw.txt', "hello");


const data = fs.readFileSync('cw.txt', 'utf-8');


console.log(data);