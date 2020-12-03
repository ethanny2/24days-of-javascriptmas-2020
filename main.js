
/* 
#1.
 n children have got m pieces of candy. They each want to eat
 as much candy as they can, but each child must eat exactly
 the same amount of candy as the other children. Determine
 how many pieces of candy will be eaton by all the children
 together. 
 Note: Individual pieces of candy cannot be split
*/
exports.candies = (children, candy) => {
    //  write code here.
    const amountEatenEach = Math.floor(candy / children);
    return amountEatenEach * children;
}






