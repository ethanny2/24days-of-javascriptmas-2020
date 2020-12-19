const { alphabetSubsequence } = require('../main');

describe('alphabetSubsequence()', () => {
	it('returns false when it has duplicate letters', () => {
		// arrange
		const str = 'effg';

		// act
		const result = alphabetSubsequence(str);

		// log
		console.log(`Day 19 result 1:  alphabetSubsequence(${str}) = `, result);

		// assert
		expect(result).toBe(false);
	});

	it('returns false when NOT in ascending a - z order', () => {
		// arrange
		const str = 'cdce';

		// act
		const result = alphabetSubsequence(str);

		// log
		console.log(`Day 19 result 2:  alphabetSubsequence(${str}) = `, result);

		// assert
		expect(result).toBe(false);
	});

	it('returns true whenno duplicates and is ascending a - z order ', () => {
		// arrange
		const str = 'ace';

		// act
		const result = alphabetSubsequence(str);

		// log
		console.log(`Day 19 result 3:  alphabetSubsequence(${str}) = `, result);

		// assert
		expect(result).toBe(true);
	});
});
