// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const sumNumbers = (x, y) => {
  return x + y;
};

describe('Given two numbers we can find their sum using a function', () => {
  describe('Find the sum of given numbers', () => {
    it('Should retun 9 when 4 and 5 are parsed', () => {
      const expected = sumNumbers(5, 4);
      const actual = 9;
      expect(expected).toEqual(actual);
    });
    // ...
  });
  describe('The same should be true for negative numbers', () => {
    it('Should retun 4 when 6 and -2 are passed', () => {
      const expected = sumNumbers(6, -2);
      const actual = 4;
      expect(expected).toEqual(actual);
    });
    // ...
  });
  // ...
});
