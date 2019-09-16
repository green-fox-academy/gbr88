'use strict';
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

var abc:string[] = ['Arthur', 'Boe', 'Chloe'];

[abc[0], abc[2]] = [abc[2], abc[0]];

/* checking the swap actually works. checking is the next task anyway :D

abc.forEach(function(item, index) {
  console.log(item);
});

*/