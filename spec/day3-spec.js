const { chunkyMonkey } = require('../main');


describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = [0, 1, 2, 3, 4, 5];
        const size = 4;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
		console.log(`Day 3 result:  chunkyMonkey([${values}], ${size}) = `, result);
        
        // assert
        expect(result).toEqual([[0, 1, 2, 3], [4,5]]);
    });
});