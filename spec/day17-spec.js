const {differentSymbolsNaive} = require('../main');


describe('differentSymbolsNaive()', () => {
  it('returns count of unique characters', () => {
      // arrange
      const str = 'cabca';
      
      // act
      const result = differentSymbolsNaive(str);

      // log
      console.log(`Day 17 result :  differentSymbolsNaive(${str}) = `, result);
      
      // assert
      expect(result).toBe(3);
  });
});