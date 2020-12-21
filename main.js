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
	while (num >= currentFibNum) {
		if (currentFibNum % 2 !== 0) {
			sumOfOdds += currentFibNum;
		}
		temp = currentFibNum;
		currentFibNum += previous;
		previous = temp;
	}
	return sumOfOdds;
};

/* 
    #10: 
    Given an array of integers, find the pair of adjacent elements that
    has the largest product and return that product.

    Ex: inputArray = [3, 6, -2, -5, 7, 3] 
    adjacentElementsProduct(inputArray) returns 7*3 = 21
*/
exports.adjacentElementsProduct = (inputArray) => {
	/* Never told how to handle [], and [x] edge cases... */
	if (inputArray.length <= 0) return 0;
	if (inputArray.length === 1) return inputArray[0];
	/*
        Setting this initially to -1 will not work for edge cases like
        the array [2,-3] where the largest product is -6. Instead
        set it reequal 
    */
	let largestProd = inputArray[0] * inputArray[1];
	let leftIdx = 1;
	let rightIdx = 2;
	for (let i = 0; i < inputArray.length; i++) {
		const leftNum = inputArray[leftIdx];
		const rightNum = inputArray[rightIdx];
		if (leftNum && rightNum && rightNum * leftNum > largestProd) {
			largestProd = rightNum * leftNum;
		}
		leftIdx++;
		rightIdx++;
	}
	return largestProd;
};

/* 
    #11:
    You are given an array of integers representing coordinates of obstacles situated
    in a straight line. Assume that you are jumping from the point with coordinate (index) 0
    to the right. You are allowed only to make jumps of the same length represented by some integer.
    Find the minial length of the jump enough to avoid all the obstacles. 
    (*In other words find the lowest integer not divisible by any element in the array.)

    Ex: inputArray = [5, 3, 6 , 7, 9] avoidObstacles(inputArray) = 4
*/
exports.avoidObstacles = (nums) => {
	const sorted = nums.sort();
	let lowestNonDivisibleNum = 2;
	let position = 0;
	while (position < nums.length) {
		// Were stopped by obstacle
		if (nums[position] % lowestNonDivisibleNum === 0) {
			lowestNonDivisibleNum++;
			position = -1;
		}
		position++;
	}
	return lowestNonDivisibleNum;
};

/* 
    #12:
    Check if a given string is a correct time representation of the 24-hour clock.
    
    Ex: time = "13:58" validTime(time) = true
    Ex2: time = "25:51" validTime(time) = false
    Ex3: time = "02:76" validTime(time) = false
*/
exports.validTime = (time) => {
	if (time.length !== 5) return false;
	if (typeof time !== 'string') return false;
	if (time[0] === '2' && Number(time[1]) > 3) return false;

	const hourTens = Number(time.slice(0, 1)); // 0 - 2
	const hourOnes = Number(time.slice(1, 2)); // 0 - 9
	const minuteTens = Number(time.slice(3, 4)); // 0 - 5
	const minuteOnes = Number(time.slice(4, 5)); // 0 - 9
	if (hourTens < 0 || hourTens > 2) return false;
	if (hourOnes < 0 || hourOnes > 9) return false;
	if (minuteTens < 0 || minuteTens > 5) return false;
	if (minuteOnes < 0 || minuteOnes > 9) return false;

	return true;
};

/* 
		#13:
		Given an array of integers, remove each kth element from it and return
		the altered array.

		Ex: inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3
		     extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10]
*/
exports.extractEachKth = (nums, index) => {
	// k = 0 or k = 1 or k is negative just do this for the base case
	if (index <= 1) return nums;
	// Account for arrays being 0 indexed (idx + 1)
	return nums.filter((_, idx) => (idx + 1) % index !== 0);
};

/* 
		#14:
		Given an array of integers, find the maximal absolute difference between
		any two of its adjacent elements.

		Ex: inputArray = [2, 4, 1, 0] arrayMaximalAdjacentDifference(inputArray) = |4 - 1| = 3
		Ex#2: inputArray = [2, 9, 1, 0] arrayMaximalAdjacentDifference(inputArray) = |9 - 1| = 8
*/
exports.arrayMaximalAdjacentDifference = (nums) => {
	if (nums.length === 0) return nums;
	if (nums.length === 1) return Math.abs(nums[0]);
	let largestDiff = -1;
	nums.forEach((_, idx) => {
		let left = nums[idx];
		let right = nums[idx + 1];
		let curDiff = Math.abs(left - right);
		if (left && right && curDiff > largestDiff) {
			largestDiff = curDiff;
		}
	});
	return largestDiff;
};

/* 
		#16:
		Trasnform a given sentence into a new one
		with dashes between each two consecutive letters

		Ex: input = "aba caba" output is "a-b-a c-a-b-a"

*/
exports.insertDashes = (str) => {
	const strArr = str.split('');
	let dashArr = [];
	for (let i = 0; i < strArr.length; i++) {
		const [curChar] = strArr[i];
		//if space just keep it
		if (curChar !== ' ') {
			const nextChar = strArr[i + 1];
			nextChar && nextChar !== ' '
				? dashArr.push(curChar, '-')
				: dashArr.push(curChar);
		} else {
			dashArr.push(curChar);
		}
	}
	console.log(dashArr.join(''));
	return dashArr.join('');
};

/* 
		#17:
		Given a string, find the number of different characters in it.

		Ex: str = "cabca"  differentSymbolsNaive returns 3.

*/
exports.differentSymbolsNaive = (str) => {
	let uniqueArr = [];
	str.split('').forEach((char) => {
		if (!uniqueArr.includes(char)) uniqueArr.push(char);
	});
	return uniqueArr.length;
};

/* 
		#18:
		Given an array of integers , for each position i, search among
		the previous positions for the last (from the left; meaning the first lowest value)
		position that contains a smaller value. Store that value at position i in the answer.
		If no such value can be found, store -1 instead.

		Ex: nums = [3, 5, 2, 4, 5] the output should be [-1, 3, -1, 2, 4]
*/

exports.arrayPreviousLess = (nums) => {
	const answer = [];
	nums.forEach((_, index) => {
		//Look backwards from current position
		let newLowest = nums[index];
		for (let i = index; i >= 0; i--) {
			if (newLowest > nums[i]) {
				newLowest = nums[i];
				break;
			}
		}
		newLowest === nums[index] ? answer.push(-1) : answer.push(newLowest);
	});
	return answer;
};

/* 
		#19:
		Check weather the given string is a subsequence of the plaintext alphabeta.
		If a subsequent letter repeats it is should return false.

		Ex: string = "effg"  or string = "cdce", the output should be alphabetSubsequence(string) = false
		Ex2: string ="ace" or string ="bxz", the outpust should be alphabetSubsequence(string) = true
*/

exports.alphabetSubsequence = (str) => {
	// any char always > ""
	let prevChar = '';
	for (const curChar of str.split('')) {
		if (curChar > prevChar) {
			prevChar = curChar;
		} else {
			return false;
		}
	}
	return true;
};

/* 
		#20:
		A top-level domain is one that goes directly after the last dot in the domain name. Write
		a function that labels the domains as 'commercial', 'organization', 'network', or 'information'
		for .com , .org , .net and .info respectively. For the given list of domains return the list of their
		labels

		Ex:  domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"]
		domainType(domains) returns ["organization", "commercial", "network", "information"]
*/

exports.domainType = (domains) => {
	return domains.map((domain) => {
		switch (domain.slice(domain.lastIndexOf('.') + 1)) {
			case 'org':
				return 'organization';
			case 'com':
				return 'commercial';
			case 'info':
				return 'information';
			case 'net':
				return 'network';
		}
	});
};

/* 
		#21:
		You have two integer arrays, a and b, and an integer target value v. Determine weather or not
		there is a pair of numbers, where one number is taken from a and the other from b, that can
		be added together to get a sum of v. Return true if such a pair exists, otherwise return false.
		
		Ex: a = [1,2,3] b = [10,20,30,40] and v = 42, the output sumOfTwo(a,b,v) = true
*/
exports.sumOfTwo = (nums1, nums2, value) => {
	let retVal = false;
	for (let i = 0; i < nums1.length; i++) {
		let firstElem = nums1[i];
		for (let j = 0; j < nums2.length; j++) {
			let secondElem = nums2[j];
			if (firstElem + secondElem === value) return true;
		}
	}
	return false;
};
