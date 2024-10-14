/**Map-ის ძიება მნიშვნელობებით**: შექმენი `Map`, რომელიც ინახავს ცხოველების დასახელებებს და მათ საცხოვრებელ გარემოს
 *  (მაგ., "Lion" => "Savannah"). მოძებნე ყველა ცხოველი, რომელიც ცხოვრობს გარკვეულ გარემოში (მაგალითად, "Savannah") */



const animals = new Map([
    ["Lion","Savannah"],
    ["Penguin", "Arctic"]
])


function findAnimals(place){
    const animalsHabitat = [];
    for(let [animal,env] of animals.entries()){
        if(env === place){
            animalsHabitat.push(animal);
        }
    }
    return animalsHabitat
}

console.log(findAnimals("Savannah"))