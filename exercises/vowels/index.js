// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//  let counter = 0
//  let vowel= "aeiou"
//   for (let i=0;i<vowel.length; ++i){
//     if (str.toLowerCase().includes(vowel[i])) {
//       counter++
//     } else {
//       continue
//     }
//   }
//   return counter
// }

//with RegEx
 //match() returns the num of matches in an arr, or null if nothing is found
 //regex g for global and i for case insensitive
 //if matches is true return length if falsy return 0

function vowels(str){

let matches = str.match(/["aeiou"]/gi)
return matches ? matches.length : 0

}

module.exports = vowels;
