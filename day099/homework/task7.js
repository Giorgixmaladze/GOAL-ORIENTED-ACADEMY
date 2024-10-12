/*Create a Player class where each time an instance
 is created, a static method getPlayerCount() keeps track of how many players have been created.
*/

class Player{
    static count = 0
    
    constructor(name,age){
        this.name = name;
        this.age = age;
        Player.getPlayerCount()
    }
    static getPlayerCount(){
        Player.count += 1
        return count
    }
}

const player = new Player("cristiano",39)

console.log(Player.count)