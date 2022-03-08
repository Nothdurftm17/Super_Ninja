class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    // const ninja1 = new Ninja("Hyabusa");
    sayName(){
        console.log(`Name: ${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name}`)
        console.log(`Health: ${this.health}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Strength: ${this.strength}`)
    }

    drinkSake(){
        this.health += 10;
        console.log(`Health is now ${this.health}`)
    }
}
const ninja1 =new Ninja ("Matt", "100", "3", "3") 
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor (name,health=210,speed=10,strength=10){
        super("Master Splinter", health, speed, strength)
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log("Real G's move in silence like Lasagna")
    }

    showStats(){
        super.showStats()
    }
}

const superSensei = new Sensei("Master Splinter", "210", "10", "10","10");
superSensei.speakWisdom();
superSensei.showStats();

