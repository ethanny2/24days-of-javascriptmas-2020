var Jasmine = require('jasmine');
var jasmine = new Jasmine();

/*
 n children have got m pieces of candy. They each want to eat
 as much candy as they can, but each child must eat exactly
 the same amount of candy as the other children. Determine
 how many pieces of candy will be eaton by all the children
 together. 
 Note: Individual pieces of candy cannot be split
*/
function candies(children, candy) {
    //  write code here.
    const amountEatenEach = Math.floor(candy / children);
    return amountEatenEach * children;
}



/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});