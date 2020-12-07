const {countVowelConsonant}  = require('../main');

describe('countVowelConsonant()', () => {
  it('returns total of vowels(1) and consonants(2) to be added', () => {
      // arrange
      const value = 'abcde';
      
      // act
      const result = countVowelConsonant(value);

      // log
      console.log(`Day 7 result:  countVowelConsonant(${value}) = `, result);
      
      // assert
      expect(result).toBe(8);
  });
});