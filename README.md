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