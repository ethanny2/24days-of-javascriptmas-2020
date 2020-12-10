const {adjacentElementsProduct} = require('../main');

describe('adjacentElementsProduct()', () => {
  it('returns largest product of adjacent values', () => {
      // arrange
      const nums = [3, 6, -2, -5, 7, 3];
      
      // act
      const result = adjacentElementsProduct(nums);

      // log
      console.log(`Day 10 result:  adjacentElementsProduct([${nums}]) = `, result);
      
      // assert
      expect(result).toBe(21);
  });
});