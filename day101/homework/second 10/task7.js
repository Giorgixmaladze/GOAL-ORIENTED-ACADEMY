/**
 * **Map და მასივის გარდაქმნა**: შექმენი `Map`, რომელიც ინახავს სპორტის სახეობებს 
 * და მათთვის საჭირო მოთამაშეების რაოდენობას. გამოიყენე `Array.from()` და გარდაქმენი ეს `Map` მასივად.
 */



const sports = new Map([

    ["Football", 11],
    ["Basketball", 5]
]
)


const sportsArray=Array.from(sports)

console.log(sportsArray)