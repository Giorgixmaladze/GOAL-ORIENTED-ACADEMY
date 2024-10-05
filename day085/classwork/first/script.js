let names = ["gio","luka","nika"]


// ამატებს სიის ბოლოში
names.push("gabrieli")

console.log(names)


// შლის სიიდან ბოლო ელემენტს
names.pop()
console.log(names)

// მე0 ინდექსდან შლის შემდეგ ორ ელემენტს,ამ მეთოდს გადაეცემა ორი არგუმენტი ინდექსი და რაოდენობა
names.splice(0,2)
console.log(names)


// ამატებს სიის დასაწყისში ელემენტს
names.unshift("alex")
console.log(names)


// შლის სიის დასაწყისიდან ელემენტს
names.shift(names[0])
console.log(names)