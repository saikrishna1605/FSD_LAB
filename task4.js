function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.study = function() {
        this.grade = Math.min(this.grade + 1, 100);
        console.log(`${this.name} studied and their grade is now ${this.grade}.`);
    };
}
Student.prototype.getGrade = function() {
    return this.grade;
};
const student1 = new Student('Alice', 85);
const student2 = new Student('Bob', 72);
const student3 = new Student('Charlie', 90);
student1.study();
student2.study();
student3.study();
console.log(`${student1.name}'s grade is: ${student1.getGrade()}`);
console.log(`${student2.name}'s grade is: ${student2.getGrade()}`);
console.log(`${student3.name}'s grade is: ${student3.getGrade()}`);