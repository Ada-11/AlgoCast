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
//very bad Time Complexity 2**N(2^N)

// function fib(n) {
//   if ( n < 2) return n
//     return fib(n - 2) + fib( n - 1 )
//   }

//Memoization version to improve recursive call Time performance

function slowfib(n){  //the standard recursive fux 2 b improved
  if ( n < 2) return n
  return fib(n - 2) + fib( n - 1 ) //!!!fib as the faster fux to be called here
}
//memoization fux
// slow fux as arg, returns a faster fux
function memoize(fn){
const cache = {}

return function(...args){ //arg is an array of arg in case we have >1 arg

  if (cache[args]) return cache[args] //return val if already saved in cache

let result = fn.apply(this,args)  //else slow fux with arg &put val in cache
cache[args] = result
return result
}

}
//speeding up fib through memoize
const fib = memoize(slowfib)

module.exports = fib;
