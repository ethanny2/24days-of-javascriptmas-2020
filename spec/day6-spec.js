
const {sortByLength}  = require('../main');


describe('sortByLength()', () => {
  it('sorts the strings from shortest to longest', () => {
      // arrange
      const strs = ["abc", "", "aaa", "a", "zz"];
      
      // act
      const result = sortByLength(strs);

      // log
      console.log(`Day 6 result:  sortByLength(${strs}) = `, result );
      
      // assert
      expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
  });
});