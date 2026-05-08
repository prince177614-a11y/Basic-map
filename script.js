// Task 1 -> Basic map

const number = [10, 20, 30];

const result = number.map((value) => value * 2);

console.log(result);

// Task 2 -> Array of objects

const products = [ 
  { 
    id: 1,
    name: "Laptop" 
  }, 
  { 
    id: 2,
    name: "Phone" 
  } 
];

console.log(products[0].name);
console.log(products[1].name);

// Task 3-> UI Thinking

const users = ["A", "B", "C"];

users.map((value) => {
  console.log(`<li>${value}</li>`)
});


// Task 4 -> Create 

const students = [ 
  { 
    id: 1,
    name: "Prince" 
  }, 
  { 
    id: 2,
    name: "Pranshu" 
  } 
];

console.log(`${students[0].name} is a student.`);
