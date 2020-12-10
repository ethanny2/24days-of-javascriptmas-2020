/* 
    #1: 
    n children have got m pieces of candy. They each want to eat
    as much candy as they can, but each child must eat exactly
    the same amount of candy as the other children. Determine
    how many pieces of candy will be eaton by all the children
    together. 
    Note: Individual pieces of candy cannot be split
*/
exports.candies = (children, candy) => {
	const amountEatenEach = Math.floor(candy / children);
	return amountEatenEach * children;
};

/* 
    #2: 
    You have deposited a specific amount of dollars into your bank
    account. Each year your balance increase at the same growth rate.
    Find out how long it would take your balance to pass a specific 
    threshold with the assumption that you don't make any additional
    deposits.
    Ex: deposit = 100, rate = 20 and threshold = 170
        depositProfit(deposit, rate, threshold)  returns 3 (years)
*/
exports.depositProfit = (deposit, rate, threshold) => {
	let years = 0;
	while (deposit < threshold) {
		deposit += deposit * (rate / 100);
		years++;
	}
	return years;
};

/* 
    #3:
    Write a function that splits an array (first argument) into groups
    the length of size (second argument) and returns them a two-dimensional
    array.

    Ex: values = ['a', 'b', 'c' , 'd'] , size = 2
    chunkyMonkey(values, size)  returns [['a', 'b'], ['c','d']]

    Ex#2:values = [0, 1, 2, 3, 4, 5] , size = 4
    chunkyMonkey(values, size)  returns [[0, 1, 2, 3], [4, 5]]

    *Its okay if it doesn't split completely evenly 
    *Also splicing an array [2,3,4].slice(2,100) doesn't yield an error
    and correctly just slices to end of the array even if size exceeds arr size

    *slicing past the start index yields empty array  
*/
exports.chunkyMonkey = (values, size) => {
	let pos = 0;
	const retArr = [];
	let lengthCut = size;
	let segment;
	do {
		segment = values.slice(pos, lengthCut);
		retArr.push(segment);
		pos += size;
		lengthCut += size;
	} while (values.slice(pos, lengthCut).length > 0); //If done this is empty
	return retArr;
};

/* 
    #4: 
    Given a year, return the century it is in. The first century spans from
    the year 1 up to and including tthe year 100, the second century is
    from the year 101 up to and including the year 200.

    Ex: year = 1905 centuryFromYear(year)  returns 20 (th century)
    Ex#2: year = 1700 centuryFromYear(year) returns 17 (th century)

    1- 100 (1st) 101- 200 (2nd)
    * Notice that each edge case (1700's is 17th century) is a number
    always divisible by 100
*/
exports.centuryFromYear = (year) =>
	year % 100 === 0 ? Math.floor(year / 100) + 0 : Math.floor(year / 100) + 1;

/* 
    #5: 
    Reverse the provided string. You may need to turn the string into an array
    before you can reverse it. Your result must be a string

    Ex: reverseAString('Howdy') returns ydwoH
*/
exports.reverseAString = (str) =>
	str.split('').reduce((acc, nextChar) => nextChar + acc, '');

/* 
    #6: 
    Given an array of strings, sort them in the order of increasing lengths. If twos strings
    have the same length, their relative order must be the same in the intial array.
*/
exports.sortByLength = (strs) =>
	strs.sort((a, b) =>
		a.length === b.length ? 0 : a.length > b.length ? 1 : -1
	);

/* 
    #7: 
    You are given a string s that consists of only lowercase English letters. If 
    vowels ('a','e','i','o' and 'u') are given a value of 1 and consonants are given
    a value of 2, return the sum of all the letters in the input string.
*/
exports.countVowelConsonant = (str) => {
	const newStr = str.toLowerCase();
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const isVowel = (char) => vowels.find((input) => input === char);
	let sum = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		sum += isVowel(char) ? 1 : 2;
	}
	return sum;
};


/* 
    #8: 
    See folder spec/day8
*/



/* 
    #9: 
    Given a positive integer num, return the sum of all odd Fibonacci numbers that are less
    than or equal to num. The first two numbers in the Fibonacci sequence are 1 and 1. Every
    subsequent number is the sum of the previous two numbers. First six numbers are 
    1, 1, 2, 3, 5, 8

    Ex: sumOddFibonacciNums(10) should return 10
    Ex#2:  sumOddFibonacciNums(1000) should return 1785
*/

exports.sumOddFibonacciNumbers = (num) => {
    let sumOfOdds = 1; //Start at 1 to account for the first fib num always being odd and 1.
    let currentFibNum = 1;
    let previous = 1;
    let temp;
    while(num >= currentFibNum){
        if(currentFibNum % 2 !== 0){
            sumOfOdds+= currentFibNum;
        }
        temp = currentFibNum;
        currentFibNum += previous;
        previous = temp;    
    }
    return sumOfOdds;
}