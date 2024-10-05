// ) შექმენით ფუნქცია სახელად manualReverse
//  რომესლაც გადმოეცემა სია, და უნდა დააბრუნოთ შემოტრიალებული ვერსია სიის


function manualReverse(arr){
    new_list = []
    for(let i = arr.length-1; i > -1; i-- ){
        new_list.push(arr[i])
    }
    return new_list
}


console.log(manualReverse([1,2,3,4,5]))