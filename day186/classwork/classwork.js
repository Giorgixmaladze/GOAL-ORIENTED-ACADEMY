// Console.log - ზოგადი ინფორმაციის დაბეჭდვა
console.log("Hello World!");

// მუშაობს მხოლოდ მცდარი შემთხვევის დროს
console.assert(5 > 10, "false");


const users = [
  { name: "Giorgi", age: 25 },
  { name: "Nino", age: 30 }
];

//	აჩვენებს მასივებს ან ობიექტებს ცხრილის სახით, რაც აადვილებს მათ წაკითხვას.
console.table(users);


console.log(process);



const used = process.memoryUsage();


const mb = used.heapUsed / (1024 * 1024);