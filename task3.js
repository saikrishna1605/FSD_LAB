class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    wish(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
    isAdult(){
        if(this.age >= 18){
            return `You are an adult, ${this.name}`;
        }
        else{
            return `You are not an adult, ${this.name}`;
        }
    }    
}
let PersonObj=new Person("Saikrishna",20);
PersonObj.wish();
console.log(PersonObj.isAdult());