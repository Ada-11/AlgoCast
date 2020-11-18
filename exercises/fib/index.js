// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
  //itirative

// function fib(n) {
//    let result = [ 0, 1]
//   for( let i =2; i<=n; ++i){
//     const a = result[i-2]
//     const b = result[i-1]
//     result.push(a+b)
//   }
//   return result[n]
// }

//RECURSIVE SOLUTION

function fib(n) {
 
  if ( n < 2) return n
    return fib(n - 2) + fib( n - 1 )
  }

module.exports = fib;
