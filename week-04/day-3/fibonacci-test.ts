'use strict';

import * as test from 'tape';
import { fibonacci} from './fibonacci';


test('testing fibonacci()', t => {
  
  const actual = fibonacci(10);
  const expected = 55;

  t.equal(actual, expected);
  t.end();
});