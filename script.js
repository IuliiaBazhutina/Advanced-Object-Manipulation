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
console.log('Student object from JSON string: ', student1);

// Part 3: Using Destructuring Assignment
console.log("\nPart 3: Using Destructuring Assignment");
let {name, age, enrolled,courses} = student;
console.log(`Name: ${name}, Courses: ${courses}`);

let scores = [85, 92, 78, 90];
let [score1, score2] = scores;
console.log(`Score 1: ${score1}\nScore 2: ${score2}`);

// Part 4: The Spread Operator
console.log("\nPart 4: The Spread Operator");

let clonedStudent = {...student};
console.log("Cloned object: ", clonedStudent);

clonedStudent = {...clonedStudent, graduationYear: 2020 };
console.log("Cloned object with a new property: ", clonedStudent);

let newCourses = ["English", "Math"];
let combinedCourses = [...student.courses, ... newCourses];
console.log("Combined courses: ", combinedCourses);


// Clone the student object using the spread operator.
// Add a new property (e.g., graduationYear) to the cloned object and log it.
// Merge two arrays:
// Use the spread operator to combine student.courses with a new array of courses.
