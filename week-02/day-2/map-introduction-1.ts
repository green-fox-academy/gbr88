'use strict';

//We are going to play with maps. Feel free to use the built-in methods where possible.

//Create an empty map where the keys are integers and the values are characters
interface maps {
  key: number;
  value: string;
}

let maps = {};

//Print out whether the map is empty or not
console.log(Object.keys(maps).length <= 0);

//Add the following key-value pairs to the map
//
//Key	Value
//97	a
//98	b
//99	c
//65	A
//66	B
//67	C

maps[97] = 'a';
maps[98] = 'b';
maps[99] = 'c';
maps[65] = 'A';
maps[66] = 'B';
maps[67] = 'C';

//Print all the keys
console.log(Object.keys(maps));

//Print all the values
let values: string[] = Object.keys(maps).map(e => maps[e]);
console.log(values);

//Add value D with the key 68
maps[68] = 'D';

//Print how many key-value pairs are in the map
console.log(Object.keys(maps).length);

//Print the value that is associated with key 99

//Remove the key-value pair where with key 97

//Print whether there is an associated value with key 100 or not

//Remove all the key-value pairs