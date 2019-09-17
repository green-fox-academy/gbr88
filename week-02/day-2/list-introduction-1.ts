'use strict';

//We are going to play with lists. Feel free to use the built-in methods where possible.

//Create an empty list which will contain names (strings)
let names: string[] = [];

//Print out the number of elements in the list
console.log(names.length);

//Add William to the list
names.push('William');

//Print out whether the list is empty or not
console.log(names.length > 0);

//Add John to the list
names.push('John');

//Add Amanda to the list
names.push('Amanda');

//Print out the number of elements in the list
console.log(names.length);

//Print out the 3rd element
console.log(names[2]);

//Iterate through the list and print out each name
//
//William
//John
//Amanda

names.forEach(e=>{
  console.log(e);
})

//Iterate through the list and print
//
//1. William
//2. John
//3. Amanda

names.forEach(function(e,i){
  console.log(i+1 + '. ' + e);
})

//Remove the 2nd element
names.splice(1,1);

//Iterate through the list in a reversed order and print out each name
//
//Amanda
//William

for (let i: number = names.length -1 ; i >= 0; i--) {
  console.log(names[i]);
}

//Remove all elements
names = [];