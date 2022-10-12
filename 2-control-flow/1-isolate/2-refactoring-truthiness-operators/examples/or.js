'use strict';

console.log('--begin--');

// experiment with different values
const a = 100;
const b = '';

// "or" expression
const orValue = a || b;

// conditional statement
let conditionalValue;
if (Boolean(a) === true) {
  conditionalValue = a;
} else {
  conditionalValue = b;
}

console.assert(orValue === conditionalValue, 'always the same!');

console.log('-- end --');