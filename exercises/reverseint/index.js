// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

 // trying out another solution

function reverseInt(n) {
let strNum = n.toString()
strNum = strNum.split('').reverse().join('')

 return strNum>=0 ? strNum : -strNum
}

module.exports = reverseInt;


/*

function reverseInt(n) {
  let toStr = n.toString()
  let reverse = ''
  for(let char of toStr){
    if(toStr[0]==="-"){
      reverse = -reverse
    }
   reverse = char+reverse
  return parseInt(reverse)
  }

}
*/
