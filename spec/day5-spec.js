const {reverseAString}  = require('../main');

describe('reverseAString()', () => {
  it('returns original string reversed', () => {
      // arrange
      const str = 'hello';
      
      // act
      const result = reverseAString(str);

      // log
      console.log(`Day 5 result:  reverseAString(${str}) = `, result);
      
      // assert
      expect(result).toBe('olleh');
  });
});