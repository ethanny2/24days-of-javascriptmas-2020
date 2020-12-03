
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
    deposit = 100, rate = 20 and threshold = 170
    Ex: depositProfit(deposit, rate, threshold)  returns 3 (years)
*/
exports.depositProfit = (deposit, rate, threshold) => {
    let years = 0;
    while(deposit < threshold){
        deposit += deposit * (rate/100);
        years++;
    }
    return years;
}


