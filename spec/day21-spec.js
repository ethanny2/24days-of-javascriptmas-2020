const {sumOfTwo} = require('../main')


describe('sumOfTwo()', () => {
  it('returns true if a value can be found that by adding one number from each list', () => {
      // arrange
      const nums1 = [1, 2, 3];
      const nums2 = [10, 20, 30, 40];
      const value = 42;
      
      // act
      const result = sumOfTwo(nums1, nums2, value);

      // log
      console.log(`Day 21 result :  sumOfTwo([${nums1}], [${nums2}] , ${value}) = `, result);
      
      // assert
      expect(result).toBe(true);
  });
});