const {insertDashes} = require('../main');

describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
      // arrange
      const value = "aba caba";
      
      // act
      const result = insertDashes(value);

      // log
      console.log(`Day 16 result :  insertDashes(${value}) = `, result);
      
      // assert
      expect(result).toBe("a-b-a c-a-b-a");
  });
});