// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {

// for(let i=0; i<n; ++i ){
// let stair = "" //if u put this statement outside the loop tests dont pass
// for(let j=0; j<n; ++j){
//   if(j<=i){
//     stair+="#"
//   }else{
//     stair +=" "
//   }
// }
// console.log(stair)
// }

// }
// WITH RECURSION!!

function steps (n, row=0, stair = ''){
//base case
  if (row ===n) return //we're not changing n directly, but we're incr row

  if (stair.length === n){
  //want to print out
  console.log(stair)
  //call the funx on the next row and return
  return steps(n, row + 1) //no need to call stair, it takes default val
  }

  if (stair.length <= row){ //the pattern is that number of # == row num
    stair += "#"
  } else {
    stair += " "
  }
 //call the fux again
 steps(n, row, stair)
}

module.exports = steps;
