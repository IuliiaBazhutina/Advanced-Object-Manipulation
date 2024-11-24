// Part 1: Understanding and Creating Objects
console.log("\nPart 1: Understanding and Creating Objects");

let student = {
    name: "Jack",
    age: 25,
    enrolled: true,
    courses: ['javascript', 'java', 'dataBase'],
    info: function () {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nEnrolled: ${this.enrolled}\nCourses: ${this.courses}`)
    }
}

console.log(student.name);
console.log(student.age);
student.info();

// Part 2: Working with JSON
console.log("\nPart 2: Working with JSON");

let studentJSON = JSON.stringify(student);
console.log(`Student JSON string: ${studentJSON}`);

let student1 = JSON.parse(studentJSON);
// console.log(`Student object converted from JSON string: ${student1}`);
console.log('Student object from JSON string: ', student1);


