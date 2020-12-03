const { candies } = require('../main');

describe('candies()', () => {
	it('returns ammount of total equal candy to be eaten', () => {
		// arrange
		const children = 11;
		const candy = 75;

		// act
		const result = candies(children, candy);

		// log
		console.log('result: ', result);

		// assert
		expect(result).toBe(66);
	});
});
