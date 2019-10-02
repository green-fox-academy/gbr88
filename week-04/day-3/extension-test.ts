'use strict';

import * as test from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 3 is 5', function (t: any): any {

  const actual = add(2, 3);
  const expected = 5;

  t.equal(actual, expected);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {

  t.equal(add(1, 4), 5);
  t.end();
});

test('max of three: first', function (t: any): any {

  const actual = maxOfThree(10,1,4);
  const expected = 10;

  t.equal(actual, expected);
  t.end();
});

test('max of three: third', function (t: any): any {
  
  const actual = maxOfThree(3, 4, 5);
  const expected = 5;

  t.equal(actual, expected);
  t.end();
});

test('median: length even', function (t: any): any {

  const actual = median([7, 2, 3, 1]);
  const expected = 2;

  t.equal(actual, expected);
  t.end();
});

test('median: length odd', function (t: any): any {

  const actual = median([1, 2, 8, 4, 5]);
  const expected = 8;
  
  t.equal(actual, expected);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test('is vowel: k', function (t: any): any {
  t.notOk(isVowel('k'));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});