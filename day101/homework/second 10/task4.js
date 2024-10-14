/***Map-ის კლონი**: შექმენი `Map`, რომელიც შეიცავს ქვეყნის სახელებს და
 *  მათ დედაქალაქებს. შექმენი ახალი `Map`, რომელიც ამ `Map`-ის სრული კლონი იქნება.*/


const capital = new Map([
    ["Georgia","Tbilisi"],
    ["USA", "Washington"],
    ["France","Paris"]
])


const clone = new Map()

capital.forEach((capital,country)=>{
    clone.set(country,capital)
})


console.log(clone)