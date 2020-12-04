const {centuryFromYear} =  require('../main');

describe('centuryFromYear()', () => {
  it('returns current century', () => {
      // arrange
      const year = 1905;
      
      // act
      const result = centuryFromYear(year);

      // log
      console.log(`Day 4 result part 1:  centuryFromYear(${year}) = `, result + " Centuries");
      
      // assert
      expect(result).toBe(20);
  });
  
  it('returns current century for edge case of start of century', () => {
      // arrange
      const year = 1700;
      
      // act
      const result = centuryFromYear(year);

      // log
      console.log(`Day 4 result edge case:  centuryFromYear(${year}) = `, result + " Centuries");
      
      // assert
      expect(result).toBe(17);
  });    
});