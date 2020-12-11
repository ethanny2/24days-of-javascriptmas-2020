const {avoidObstacles} = require('../main');

describe('avoidObstacles()', () => {
  it('returns minimal number of jumps in between numbers', () => {
      // arrange
      const nums = [5, 3, 6, 7, 9];
      
      // act
      const result = avoidObstacles(nums);

      // log
      console.log(`Day 11 result:  avoidObstacles([${nums}]) = `, result);
      
      // assert
      expect(result).toBe(4);
  });
});