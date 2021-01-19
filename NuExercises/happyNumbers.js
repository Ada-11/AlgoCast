/*
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 ( where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

*/
function isHappy(n){
  if(n===1) return true
   let sum = 0;

  let history = {}
  while(n!==1 && history[sum]){
    history[sum] = true
    sum = 0
    n.toString().split('').forEach(x=>sum += x**2)
    n=sum
  }
  return sum ===1
}
