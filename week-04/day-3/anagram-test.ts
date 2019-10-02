'use strict';

import * as test from 'tape';
import { anagram } from './anagram';

test('testing anagram() retrun', t => {  
  const actual = anagram('rail safety','fairy tales');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});