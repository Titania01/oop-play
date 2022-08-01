class Character {
  constructor(speed) {
    this.speed = speed;
  }
  move = () => console.log(`I'm moving at speed of ${this.speed}!`);
}

class Enemy extends Character {
  constructor(name, phrase, power, speed) {
    super(speed);
    this.name = name;
    this.phrase = phrase;
    this.power = power;
  }
  sayPhrase = () => console.log(this.phrase);
  attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

class Alien extends Enemy {
  #birthYear; // private property
  constructor(name, phrase, power, speed, birthYear) {
    super(name, phrase, power, speed);
    this.species = "alien";
    this.#birthYear = birthYear;
  }
  fly = () => console.log("Zzzzziiiiinnnnggggg!!");
  howOld = () => console.log(`I was born in ${this.#birthYear}`);
}

class Bug extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "bug";
  }
  hide = () => console.log("You can't catch me now!");
}

class Robot extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "robot";
  }
  transform = () => console.log("Optimus prime!");
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50, 10000);
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60);
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120);
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30);
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40);

alien1.howOld();
console.log(bug1.power);
console.log(alien1.name);
console.log(bug2.species);
Robot1.sayPhrase();
Robot1.attack();
alien1.attack();
Robot2.transform();
alien1.move();
console.log(alien2.speed);
