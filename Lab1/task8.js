function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
};
const john = new Person("John", 30);
console.log(Person.prototype);
console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);
console.log(john.describe());
Person.prototype.greet = function() {
    return `Hello, ${this.name}!`;
};
console.log(john.greet());