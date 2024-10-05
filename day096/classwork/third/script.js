const numArr = [0,1,1,2,3,4,5,6,7,8,9];

let counts = {}

const onlyTwice = numArr.filter((num) => {
    if(num in counts){
        counts[num]++;
    }
    else {
        counts[num] = 1;
    }
})

console.log(counts)





const manulFilter = (arr) => {
    const result = [];

    let counts = {}
    

    for(let i = 0;i < arr.length; i++){
        if(arr[i] in counts){
            arr[i]++;
        }
        else {
            arr[i] = 1;
        }
    }

    for(const num of arr){
        if(counts[num] === 2){
            result.push(num);
        }
    }

    return result;
}