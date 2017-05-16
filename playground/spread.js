// function add(a, b){
//   return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];

// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA, ...groupB];

// console.log(final);

var person = ['Viswanath', 24];
var personTwo = ['Swetha', 20];

// Hi Swetha, you are 20
function greet(name, age){
  return console.log('Hi ' + name + ' , you are ' + age);
}

greet(...person);
greet(...personTwo);
  

var names = ['Mike', 'Ben'];
var final = ['Wishu', ...names];
// Hi Mike
final.forEach(function(name){
  console.log('Hi, ' + name);
});