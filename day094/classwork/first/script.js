const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});






const fruits = ['apple', 'banana', 'cherry'];

const fruitsUpper = []
fruits.forEach((fruit) => {
    fruitsUpper.push(fruit.toUpperCase());
});

console.log(fruitsUpper);






const animals = ['cat', 'dog', 'elephant'];

const myForEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}


myForEach(animals, (animal, index) => {
    console.log(`Animal index ${index}: ${animal}`);
});











const names = ['Giorgi', 'Nika', 'Luka', 'Gabrieli', 'Data'];

const transformedNames = []
const NAMES = names.map((name, index) => {
    if (index % 2 === 0) {
        transformedNames.push(name.toUpperCase());
    } else {
        transformedNames.push(name.toLowerCase());
    }
});

console.log(transformedNames);







function myMap(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i, arr));
    }
    return result;
}


const myTransformedNames = myMap(names, (name, index) => {
    if (index % 2 === 0) {
        return name.toUpperCase();
    } else {
        return name.toLowerCase();
    }
});

console.log(myTransformedNames);

