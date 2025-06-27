"use strict";
// type userType = {
//     firstname:string,
//     lastname:string,
//     id:string | number
// }
const func = function (brand, model, year, id) {
    const car = {
        brand,
        model,
        year, id
    };
    return car;
};
console.log(func("Audi", "rs4", 2007, 13214));
