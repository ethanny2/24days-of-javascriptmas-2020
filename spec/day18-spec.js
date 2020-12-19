const {arrayPreviousLess} = require('../main');

describe('arrayPreviousLess()', () => {
  it('shift previous postions from the left to a smaller value or store -1', () => {
      // arrange
      const nums = [3, 5, 2, 4, 5];
      
      // act
      const result = arrayPreviousLess(nums);

      // log
      console.log(`Day 18 result :  arrayPreviousLess([${nums}]) = `, result);
      
      // assert
      expect(result).toEqual([-1, 3, -1, 2, 4]);
  });
});