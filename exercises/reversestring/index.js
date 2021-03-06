// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let reverse = ''
//   for( let char of str){
//     reverse = char + reverse
//   }
//   return reverse;
// }


function reverse(str) {
  return str.split('').reverse().join('')
}
module.exports = reverse;

/*
function reverse(str) {
  return str.split('').reduce((reverse, char)=>{
    return char+reverse
  },'')
}

*/
