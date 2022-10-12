'use strict';

console.log('--begin--')

// experiment with different values
const a = 'hi';
const b = 123;
const c = null;

// ternary expression
const ternaryValue = a ? b : c;

// conditional statement
let conditionalValue;
if (Boolean(a) === true) {
  conditionalValue = b;
} else {
  conditionalValue = c;
}

console.assert(ternaryValue === conditionalValue, 'always the same!');

console.log('-- end --');
