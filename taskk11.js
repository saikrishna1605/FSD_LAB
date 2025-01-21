class Animal {
    speak() {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

const animal = new Animal();
const dog = new Dog();

animal.speak(); 
dog.speak(); 