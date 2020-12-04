
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
}

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
    while(deposit < threshold){
        deposit += deposit * (rate/100);
        years++;
    }
    return years;
}

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
    } 
    while ( values.slice(pos, lengthCut).length > 0); //If done this is empty
    return retArr;
}

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
exports.centuryFromYear = (year) => year %  100 === 0 ? Math.floor(year/100) + 0 :  Math.floor(year/100) + 1;
