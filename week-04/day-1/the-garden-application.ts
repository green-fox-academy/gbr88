'use strict';

// The Garden Application

// The task is to create a garden application, so in your main method you should create a garden with flowers and trees.
// The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange).
// In the example after creating them you should show the user, how the garden looks like.
// After that the program should water the garden twice, first with the amount of 40 then with 70.
// And after every watering the user should see the state of the garden as you can see in the output.

// The output should look like this:

// The yellow Flower needs water
// The blue Flower needs water
// The purple Tree needs water
// The orange Tree needs water

// Watering with 40
// The yellow Flower doesnt need water
// The blue Flower doesnt need water
// The purple Tree needs water
// The orange Tree needs water

// Watering with 70
// The yellow Flower doesnt need water
// The blue Flower doesnt need water
// The purple Tree doesnt need water
// The orange Tree doesnt need water

import { Tree } from './the-tree';
import { Flower } from './the-flower';
import { Garden } from './the-garden';

let garden = new Garden();

let f1 = new Flower('yellow');
let f2 = new Flower('blue');
let t1 = new Tree('purple');
let t2 = new Tree('orange');

garden.addPlant(f1);
garden.addPlant(f2);
garden.addPlant(t1);
garden.addPlant(t2);

console.log('Status of the garden:');
garden.statusAll();

console.log('\nStatus of the garden after watering with 40 amount:');
garden.waterAll(40);
garden.statusAll();

console.log('\nStatus of the garden after watering with 70 amount:');
garden.waterAll(70);
garden.statusAll();