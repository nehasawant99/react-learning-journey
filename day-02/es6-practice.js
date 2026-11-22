/*Exercise 1 – Arrow function

Create an arrow function calculateTotal that accepts three subject marks and returns their total.

Input: 78, 85, 90

Expected output: 253*/

const calculateTotal =(m1,m2,m3)=>m1+m2+m3;
console.log("totalmarks", calculateTotal(78,85,90));
        

const name="rey";
const course="bca";
const college="Dy patil";

console.log(`My name is ${name}.Studying degree of ${course}. Name of college ${college}.`);


const product = {
    name: "The frog",
    price: 150,
    category :"fiction"
    };
    
    const {pnamename, price, category} = product;
    console.log(name);
    console.log(price);
    console.log(category);


   /* Exercise 4 – Spread operator
Create two arrays of programming languages. Combine them into a third array using the spread operator.*/

const languages1 = ["python","C++","C#"];
const languages2 =["Python"];
const combinedlanguages = [...languages1,...languages2];
console.log(combinedlanguages);


const studentname = ["john","jane","jack","pooja", "priya"];
studentname.forEach(name => {
    console.log(name);
});


// Exercise 5: forEach()
const studentNames = ["Ram", "Rahul", "Raju", "Pooja", "Neha"];

console.log("Exercise 5:");

studentNames.forEach(studentName => {
    console.log(studentName);
});


// Exercise 6: map()
const prices = [100, 200, 300, 400];

const updatedPrices = prices.map(price => price + 50);

console.log("Exercise 6:", updatedPrices);


// Exercise 7: filter()
const students = [
    { name: "Amit", marks: 75 },
    { name: "Neha", marks: 90 },
    { name: "Riya", marks: 85 },
    { name: "Raj", marks: 60 }
];

const passedStudents = students.filter(student => student.marks >= 80);

console.log("Exercise 7:", passedStudents);


/*add*/

const a = 25;
const b = 15;

console.log(a+b);
