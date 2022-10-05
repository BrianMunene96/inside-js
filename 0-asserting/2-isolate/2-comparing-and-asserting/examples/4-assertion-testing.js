// #todo

'use strict';

console.log('-- begin --');

// console.assert is a good way to test your understanding of code
//  the idea is to write what you expect the value to be
//  then check your guess with console.assert

// inline

console.assert('hello' === 'hello', 'Inline 1');
// ASSERTION is true so nothing happens

console.assert('4' === 'four', 'Inline 2');
//ASSERTION is falso so we see an error

console.assert('good bye.' === 'good bye', 'Inline 3');
// This assertion fails

// with a variable (looks good in the debugger)

const test1 = 'hello' === 'hello';
console.assert(test1, 'With a Variable 1');
// This assertion passes

const test2 = '4' === 'four';
console.assert(test2, 'With a Variable 2');
// this one fails

const test3 = 'good bye.' === 'good bye';
console.assert(test3, 'With a Variable 3');
// and so does this one

console.log('-- end --');
