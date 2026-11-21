/*Exercise 1 – Student information

Create variables for:
- Student name
- Age
- Course
- College name
Print all four values.

Expected output:
Name: Neha
Age: 21
Course: MCA
College: FAMT
*/


let = studentname ="neha";
const age =21;
let course="mca";
let college="famt";

console.log("Name:", studentname);
console.log("Age:", age);
console.log("Course:", course);
console.log("college:",college);

/*Exercise 2 – Function

Create a function called calculateTotal().

It should accept three subject marks and return their total.

Test it with:
78, 85, 90


Expected output:
Total Marks: 253
*/

function calculateTotal(num1, num2, num3) {
    return num1 +num2 + num3;

}

const totalmarks = calculateTotal(10 , 20 , 30);
console.log("totalmarks:", totalmarks);

/*Exercise 3 – Array

Create an array containing five programming languages.

Perform these operations:
1. Print all languages.
2. Print the first language.
3. Add one more language.
4. Print the array length.
Expected output (example):
Java
5
6*/

const languages =["java","python","C#","C+","react"];
console.log("All languages:" , languages);
console.log("the first languages:", languages[1]);
languages.push("javascript");
console.log("add one more languages:", languages);
console.log("arraylength:", languages.length);

/*
Exercise 4 – Object

Create an object named student with:
- id
- name
- course
- semester
- marks
Print the student's name, course and marks.
*/

const student = {
    id:1,
    Name:"sakshi",
    course:"msc",
    semster:8,
    marks:90
};
console.log("studentname:", student.Name);
console.log("Course:", student.course);
console.log("marks:", student.marks);
/*
Exercise 5 – Array of objects

Create three student records with their IDs, names and marks.

Use map() to print each student's name.

Expected output:
Neha
Aarav
Priya
*/
