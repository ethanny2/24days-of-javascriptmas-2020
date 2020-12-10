const {sumOddFibonacciNumbers} = require('../main');

describe('sumOddFibonacciNumbers()', () => {
    it('returns sum of all odd Fibonnci numbers', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
      console.log(`Day 9 result part 1:  sumOddFibonacciNumbers(${num}) = `, result);
        
        // assert
        expect(result).toBe(10);
    });

    it('returns sum of all odd Fibonnci numbers 2nd example', () => {
        // arrange
        const num = 1000;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
      console.log(`Day 9 result part 2:  sumOddFibonacciNumbers(${num}) = `, result);
        
        // assert
        expect(result).toBe(1785);
    });
});