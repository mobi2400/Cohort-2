// A class is a blueprint for creating objects with shared properties and methods.
// it remove undefined marker from the console output
class Animal {
    // Animal Class Example
    // This class represents an animal with a name and a number of legs.
    // class gives us a way to create objects with shared properties and methods.
  constructor(name, legCount) { // Constructor to initialize the animal's name and leg count
    // The constructor is a special method that is called when a new instance of the class is created.
    // 'this' refers to the instance of the class being created.
    this.name = name
    this.legCount = legCount
  }
// Method to describe the animal
  // Methods are functions that belong to the class and can be called on instances of the class
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
} 

const dog = new Animal('dog', 4)
console.log(dog.describe())

const cat = new Animal('cat', 4)
console.log(cat.describe())

const bird = new Animal('bird', 2)
console.log(bird.describe())
const fish = new Animal('fish', 0)
console.log(fish.describe())