
const set1  = new Set([1,2,3])
const set2 = new Set([4,5,6,6])
const set3 = new Set([6,7,8])



function combine(set1,set2,set3){
    let combined  = new Set([...set1,...set2,...set3])
    return combined
}

console.log(combine(set1,set2,set3))