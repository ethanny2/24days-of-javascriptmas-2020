const { validTime} = require('../main');

describe('validTime()', () => {
  it('returns true for valid time', () => {
      // arrange
      const str = '13:58';
      
      // act
      const result = validTime(str);

      // log
      console.log(`Day 12 result part 1:  validTime(${str}) = `, result);
      
      // assert
      expect(result).toBe(true);
  });

  it('returns false when invalid hours', () => {
      // arrange
      const str = '25:51';
      
      // act
      const result = validTime(str);

      // log
      console.log(`Day 12 result part 2:  validTime(${str}) = `, result);
      
      // assert
      expect(result).toBe(false);
  });

  it('returns false when invalid minutes', () => {
      // arrange
      const str = '02:76';
      
      // act
      const result = validTime(str);

      // log
      console.log(`Day 12 result part 3:  validTime(${str}) = `, result);
      
      // assert
      expect(result).toBe(false);
  });
});