[![GitHub issues](https://img.shields.io/github/issues/ethanny2/24days-of-javascriptmas-2020?style=for-the-badge)](https://github.com/ethanny2/24days-of-javascriptmas-2020/issues)
[![GitHub forks](https://img.shields.io/github/forks/ethanny2/24days-of-javascriptmas-2020?style=for-the-badge)](https://github.com/ethanny2/24days-of-javascriptmas-2020/network)
[![GitHub stars](https://img.shields.io/github/stars/ethanny2/24days-of-javascriptmas-2020?style=for-the-badge)](https://github.com/ethanny2/24days-of-javascriptmas-2020/stargazers)
[![GitHub license](https://img.shields.io/github/license/ethanny2/24days-of-javascriptmas-2020?style=for-the-badge)](https://github.com/ethanny2/24days-of-javascriptmas-2020)

# 24 Days of JavaScriptmas

Attempting 24 days of increasingly difficult JavaScript challenges December 1, 2020 - December 24,2020
as per [Scrimba](https://scrimba.com/learn/adventcalendar) 's rules.

## Table of contents

- [Day 1](#day-1)
- [Day 2](#day-2)
- [Day 3](#day-3)
- [Day 4](#day-4)
- [Day 5](#day-5)
- [Day 6](#day-6)
- [Day 7](#day-7)
- [Day 8](#day-8)
- [Day 9](#day-9)
- [Day 10](#day-10)
- [Day 11](#day-11)
- [Day 12](#day-12)
- [Day 13](#day-13)
- [Day 14](#day-14)



## Day 1

![Day 1 Question](https://i.gyazo.com/f9d2ed7201cc94df51df120e574c47e9.png)
#### Answer:

```
const candies = (children, candy) => {
    const amountEatenEach = Math.floor(candy / children);
    return amountEatenEach * children;
}
```

#### Logic:
Divide number of candies by number of children and round down. (Math.floor). This is how many pieces each child will get individually, but the question asks the total
pieces eaten so you multiply by the # of children.

## Day 2

![Day2 Question](https://i.gyazo.com/982f774f7a3be7357e01f9103e613e73.png)


#### Answer:

```
const depositProfit = (deposit, rate, threshold) => {
    let years = 0;
    while(deposit < threshold){
        deposit += deposit * (rate/100);
        years++;
    }
    return years;
}
```

#### Logic:
Keep accruing money each year; the balance increase by the % that is specified by the rate parameter. Once the money in the account exceeds the threshold parameter stop and return
how many years it will take. Since rate is a percentage divide by 100.


## Day 3

![Day3 Question](https://i.gyazo.com/104850381c156489bd78fe31703fcd32.png)


#### Answer:

```
const chunkyMonkey = (values, size) => {
    let pos = 0;
    const retArr = [];
    let lengthCut = size;
    let segment;
    do {   
        segment = values.slice(pos, lengthCut);
        retArr.push(segment);
        pos += size;
        lengthCut += size;
    } 
    while ( values.slice(pos, lengthCut).length > 0);  //If done this is empty
    return retArr;
}
```

#### Logic:
Need some mechanism to continually slice the values array till it cannot no longer be sliced. To continue running something until our desired value is reached
we usually need some type of loop (while or for) or some kind of recursive solution. 
I stuck with the former and created a do-while loop; the only difference a do-while and while is the **do-while loop runs the body of the loop at least once**. 
 1) In the "do" block I initially slice the array using the starting position (pos) and the variable lengthCut which is intially equal to size. 
 2) That sliced segment gets pushed into the array we wish to return
 3) Afterwards increment the pos variable by the size to account for segments you already sliced off.
 4) Similarly, length cut is incremented by the size as well; note the second argument of slice() is not the amount to cut off but rather the endIndex. To correctly get both the new start position and endIndex they must be incremented by size to 
 5) After all these calculations in the do block of the loop the while portion checks if the next calculated (using the newly incremeneted pos and lengthCut) segment is returned as [] meaning we are at the end of the array and cannot possibly slice anymore.


## Day 4

![Day4 Question](https://i.gyazo.com/969c80df82b610b69303aeb3b79c8bd8.png)


#### Answer:

```
const centuryFromYear = (year) => year %  100 === 0 ? Math.floor(year/100) + 0 :  Math.floor(year/100) + 1;

```

#### Logic:
A century is loosely defined as a period of 100 years (with some edge cases on the end years ). Generally to calculate a century you just need (year / 100) + 1. For the edge cases like 1800, 1700 etc.. we don't need to add + 1.
All the afforementioned dates indicate a new century is about to begin; we can determine this because all the edge case years are divisible by 100.


## Day 5

![Day5 Question](https://i.gyazo.com/34b4545e0355f6a51064629a2cf8292b.png)


#### Answer:

```
const reverseAString = (str) => str.split('').reduce((acc, nextChar) => nextChar + acc, '');
```

#### Logic:
There are many different ways to reverse a string including a reverse for-loop, converting the string to an array then
using the Array.reverse() method and then converting back.
I used reduce as a challenge; here's the explaination
    1) The function takes in a string a returns the result of the inputted string split into an array of characters and then reduced.
    2) reduce() accumlates a value and iterates over an array doing something (adding subtracting etc...) by invoking the callback you provided to reduce(). The value returned from your callback is the new value feed in as the first argument of your callback in the next iteration of the loop
    3) In shorter terms we start the reduce with an empty string '' loop over all the chars of the string where for each we append the next character ahead of the previous characters resulting in a reversed string


## Day 6

![Day6 Question](https://i.gyazo.com/20052e60456798f2913b58a1d4e3c1db.png)


#### Answer:

```
const sortByLength = (strs) => strs.sort((a, b) => a.length === b.length ? 0 : a.length > b.length ? 1 : -1);

```

#### Logic:
Looking into Array.sort() we see that just using that on array of strings sorts successfully but the default implementation will swap positions of strings alphabetically meaning that it will break this questions condition of 'If twos strings have the same length, their relative order must be the same in the intial array.'
Meaning that we can still use Array.sort() but pass in a callback compare function that takes the next two
elements out of the array and compares them sorting the two elements in a particular order depending on if your
callback returns 0, a # greater than 1 or a # less than 1. ([See docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort))

My sort function uses a double ternary expression but is the same as an if/ else if. Here are the cases
    1) a === b return 0 meaning the length is the same don't change original positions
    2) a > b returns 1 meaning a is bigger and b is placed first 
    3) a < b returns -1 meaning b is bigger than a and is placed first



## Day 7

![Day7 Question](https://i.gyazo.com/f017ce2f5c51ae0be06a229144bc7411.png)


#### Answer:

```
const countVowelConsonant = (str) => {
	const newStr = str.toLowerCase();
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const isVowel = (char) => vowels.find((input) => input === char);
	let sum = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		sum += isVowel(char) ? 1 : 2;
	}
	return sum;
}
```

#### Logic:
We simply need to loop through the string (string[n] can access individual chars) and for check if the current char is a vowel or a consonant. If a vowel add 1 to the sum if not add 2. I created an array of vowels and a helper function to check if a char is in the value array (also could have used Array.includes()).


## Day 8

![Day8 Question](https://i.gyazo.com/9b5256fb87d94629ff8b0c7dd4ad9188.png)


#### Answer:

```
//See CSS file for grid layout...

const dice = document.querySelector('.dice');
dice.addEventListener('click', function(e){
  dice.innerHTML = '';
  const randomNum = Math.floor( Math.random() * 6) + 1;
  dice.innerHTML = `${new Array(randomNum).fill('<div class="dot"></div>').join(' ')}`
});
```

#### Logic:
This is primarily testing 3 things; can you get a random number, can you alter the DOM/ use eventListeners
and can you design a 2 column 3 row layout.
    1. Random number in JS : Math.floor(Math.random() * max) + 1.  Math.floor() rounds the result down to the nearest whole number. Math.random() returns a num between 0 and 1 exclusive (never quite reaches 0 or 1). Multiplying the result of random with your max will give you a decimal between 0 (not including 0) and max -1. We add the one at the end to account for the fact that it may be rounded down to 0 and to bring the max value able to be returned from this statement is now 1 - [CHOOSEN MAX NUM]
    2. We use the document object to retrieve one of our HTML nodes as an object and attach a click event listener to it.
    3. Inside the event listener we generate a random num, and populate the dice with the correct number of .dot divs. For this I opted to fill an empty array with length of generated random number full of .dot div's as strings. Then I join the array converting it back into a string and splitting each index by a space and finally the ${} evaluates that large returned string of all the necessary dots.



## Day 9

![Day9 Question](https://i.gyazo.com/74cd35194038e466856f67c80706e3ac.png)


#### Answer:

```
const sumOddFibonacciNumbers = (num) => {
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
```

#### Logic:
At first seeing the words Fibonacci I assumed the easiest solution would be to use some form of recursion since that is the preferred way to get the nth Fibonocci number. Without changing the signature  of the function (aka the parameters and what type of value is returned) I couldn't find a way to make a recursive solution work. The alternative route was to use a while loop and count the fibonacci numbers up from the starting pair (1, 1) and on each new calculation of currentFibNum we check if it is odd, if so add it to the running sum. 

The rest of the body of the while loop just continues the fibonacci sequence by adding (currentFibNum + previous) to get the new fib num and then using the previous value of currentFibNum to set previous.





## Day 10

![Day10 Question](https://i.gyazo.com/8f19ae3631047790f45279df9bff15c7.png)


#### Answer:

```
const adjacentElementsProduct = (inputArray) => {
	/* Never told how to handle [], and [x] edge cases... */
	if (inputArray.length <= 0) return 0;
	if (inputArray.length === 1) return inputArray[0];
	/*
        Setting this initially to -1 will not work for edge cases like
        the array [2,-3] where the largest product is -6.
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
```

#### Logic:
We need to loop through the given input array comparing adjacent elements while regularly checking if inputArray[n] is undefined to see if the loop is done. The question doesn't say what to do for edge cases where the input array is [], or [x]. For these cases I return 0 and x respectively. We have a variable largestProd to keep track of which product is currently the largest. I wanted to initialize this variable to -1 or some large negative number but then realized I couldn't guarantee the inputArray would not look like this [100, -1] meaning there certainly a possiblity that the largest product is a negative number. So I instead opted to set the largestProduct to the product of the first 2 indicies because by that line in the function we already know inputArray's length is at least 2. 




## Day 11

![Day11 Question](https://i.gyazo.com/7302d5e4b00bfcb4e2d6557e83cfd5a1.png)


#### Answer:

```
const avoidObstacles = (nums) => {
    const sorted = nums.sort();
    let lowestNonDivisibleNum = 2;
    let position = 0;
    while(position < sorted.length){
        // Were stopped by obstacle
        if(sorted[position] % lowestNonDivisibleNum === 0){
            lowestNonDivisibleNum++;
            position = -1 ;            
        }
        position++;
    }
    return lowestNonDivisibleNum;
}
```

#### Logic:
The hardest part of this problem is understanding what they are actually asking which is to find the lowest integer not divisible by any element in the array. Since you are required to go through the entire array again even if you encounter one element that is divisible by your current lowest number sorting the array is not actually necessary. When an obstacle is encountered (the if is entered) we increment our lowestNonDivisibleNum and set position = -1 
so it can be incremented back to 0 and we can start re-checking the loop. 


## Day 12

![Day12 Question](https://i.gyazo.com/4daf896a44b971a4e0a06b3b47aa8c06.png)


#### Answer:
```
const validTime = (time) => {
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
```

#### Logic:
There is most likely a better solution to this using regex but I took the brute force approach. Slice the time string to get the tens and ones place of both the hours and the minutes. Check the valid values in each position (e.g. first number can only be between 0 - 2 etc...). If any of the four digits has an invalid value it will return false, otherwise it will return true. The 3 if statements at the top ensure the function returns false under the following 3 conditions
1) The input string is not 5 characters long meaning it is in the incorrect format
2) The type of the input is for some reason not a string
3) An edge case where if the first number is a 2 then the number right next to it can only be 0-3 because the 24 hour clock goes from 00 - 23. 



## Day 13

![Day13 Question](https://i.gyazo.com/300fb5e64ac803f9464741c5ab37afd1.png)


#### Answer:
```
const extractEachKth = (nums, index) => {
		if (index <= 1) return nums;
		return nums.filter((_, idx) => (idx + 1) % index !== 0);
};
```

#### Logic:
Loop through the given array and for each kth index (denoted by parameter called index) remove that element from the array and start the counting from 0 again to find the next kth element. Finally return the new array with all kth elements removed. For my base case I just made sure any k < -1 would just return the unchanged array
because there is no good way to implement these cases. 
For the actual code I filtered the input array using (_, idx) as my callback to indicate that even though you must ask for the callback params in order (ELEMENT, INDEX, ARRAY) (see the callback for Array.filter()...) we don't need access to the actual element in the array just its index position. To account for the kth element being counted starting from 1 and because arrays are 0 based I account for this discrepancy by first adding 1 to the current elements index. If the current index position of the element we are on is divisible by k (meaning it is a kth element) return false and remove it.



## Day 14

![Day14 Question](https://i.gyazo.com/42208da2f8d460919c33412f1f3cce0a.png)


#### Answer:
```
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
```

#### Logic:
We need to iterate through the array and compare every adjacent element and calculate the absolute value of their differences. If the currently calculated difference is greater than the intial value (-1 is choosen to start as |x| > -1 always) we place the new highest difference in the largestDiff variable. Using forEach but just for the index position. The if statement in the forEach checks if any of the indicies are out of bounds/undefined, if not
just compare the numbers. 

## Day 15

![Day15 Question](https://i.gyazo.com/8f7f5fa45c8d7d36ed3df984425074ee.png)


#### Answer:
```
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let photoIndex = Number(
	getComputedStyle(document.documentElement).getPropertyValue('--photoIndex')
); // 0 at start
const numPhotos = getComputedStyle(document.documentElement).getPropertyValue(
	'--numPhotos'
); //5

prevButton.addEventListener('click', function (e) {
	if (photoIndex > 0) {
		photoIndex--;
		document.documentElement.style.setProperty('--photoIndex', photoIndex);
		fadeButtonOnEnd();
	}
});

nextButton.addEventListener('click', function (e) {
	if (photoIndex < numPhotos - 1) {
		photoIndex++;
		document.documentElement.style.setProperty('--photoIndex', photoIndex);
		fadeButtonOnEnd();
	}
});

/* Both buttons should check their state (what index) then determine if they need their opacity lowered */
function fadeButtonOnEnd() {
	photoIndex === 0
		? prevButton.classList.add('end')
		: prevButton.classList.remove('end');
	photoIndex === numPhotos - 1
		? nextButton.classList.add('end')
		: nextButton.classList.remove('end');
}
```

#### Logic:
We need a way to switch the photos in the .gallery container (all images are in the HTML markup the ones that are not showing are overflowing to the right of the container, we don't see them because of overflow:hidden property). My initial thought would be to just have a container with a single image that I would replace the src attribute on click through JavaScript. Fortunately the way the CSS is set up for this encourages you to go for a mostly CSS solution with a bit of JavaScript. 
For me I created some CSS variables to keep track of some numbers so I don't have to hard code or calculate the
the offest needed to show the new photo. Each photo width is 200px with a right margin of 20px. Transforming the X position of gallery by -220px or 220px moves to the previous photo and next photo respectively. My CSS variables use other variables and the calc() functionality to calculate the offset (not hard coded) and the current index I am on. 
```
:root{
  --numPhotos: 5;
  --photoWidth: 200px;
  --photoIndex: 0; 
  --photoOffset: calc(calc(var(--photoWidth) * -1) - 20px);
}
.gallery{
   ...
   transform: translateX(calc( var(--photoIndex) * var(--photoOffset)));
   transition: transform 0.5s ease;   
   ...
}
```
All I simply need to do when a button is clicked (next or prev) is increment the photoIndex variable, then through the magic of CSS variables the new offset is calculated! I added in a transition to make it flow nicely and did a little extra adding a smooth scrolling background image property.