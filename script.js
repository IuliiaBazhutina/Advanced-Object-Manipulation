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



