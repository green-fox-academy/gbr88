'use strict';
// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

var animals:string[] = ['koal', 'pand', 'zebr'];

animals.forEach((e, i) => {
  return animals[i] = e + 'a';
});

// Prints out the new values of the array

animals.forEach(function(e, i) {
  console.log(e);
});