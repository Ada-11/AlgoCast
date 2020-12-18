// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let wordA =stringA.replace(/[^\w]/g,'').toLowerCase()
//   let wordB = stringB.replace(/[^\w]/g,'').toLowerCase()
//   let obj1 ={}
//   let obj2 = {}
//   if(wordA.length !== wordB.length) return false
//  for ( let char of wordA){
//    obj1[char] = obj1[char]+1 || 1
//  }
//  for ( let char of wordB){
//   obj2[char] = obj2[char]+1 || 1
// }

// for( let key in obj1){
//   if(obj1[key] !== obj2[key]) return false
// }
// return true
// }

// Second method

// function anagrams(stringA, stringB) {
// const map1 = builtMap(stringA)
// const map2 = builtMap(stringB)

// if(Object.keys(map1).length!== Object.keys(map2).length) return false

//  for(let char in map1){
//    if(map1[char] !== map2[char]) return false
//  }
//   return true
// }

// function builtMap(str){
//   const charMap ={}
//   for(let char of str.replace(/[^\w]/g,'')){
//     charMap[char]= charMap+1 || 1
//   }
// return charMap
// }

function anagrams(stringA,stringB) {
  let wordA = stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
  let wordB = stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
  if(wordA === wordB) return true
return false
}

module.exports = anagrams;
