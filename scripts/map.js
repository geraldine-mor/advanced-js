
  
/**
 * To run this file in VS Code, use the 
 * command node scripts/map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}

console.log(results);

// Using map()
const multByTwo = function (num) {
    return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// Create an array of arrays containing name & id
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// Create an array of objects containing id & name
const studentsObjects = students.map(student => ({ id: student.id, name: student.name }));
console.log(studentsObjects);

// Add age properties and values to each item
let ages = [25, 24, 19];
const studentsAge = students.map((student, index) => student.age = ages[index]);
console.log(students); // This updates students, really should use the spread operator to make a copy.

// const studentsAge = students.map((student, index) => ({...student, age: ages[index]}));
// console.log(studentsAge); 
// console.log(students);

// map() has an in built 2nd parameter of index. ({ BOTH SETS OF BRACKETS REQUIRED TO CREATE OBJECT IN FUNCTION })