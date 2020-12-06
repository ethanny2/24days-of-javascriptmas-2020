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
...