/*
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 ( where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

*/
function isHappy(n){
  if(n===1) return true //if n is 1 just return true
   let sum = 0; //here we'll accumulate the val in sq power

  let history = {} //we're gonna save them in a obj(map)
  while(n!==1 && !history[sum]){ //while sum is not calc in hist
     history[sum] = true
    sum = 0 //reset sum each loop
    //turn the num to string then to an arr to use forEach on it
    n.toString().split('').forEach(x=>sum += x**2)
    n=sum //replace n with the sum so the loop continues till n=1
  }
  return sum ===1 //when the while loop breaks check the sum T/F
}
