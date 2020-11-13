// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
let obj = {}
let maxVal = 0
let maxKey = ''

for (let char of str){
  //obj[char] = (obj[char]|| 0)+1
  obj[char] = obj[char]+1 || 1
}
//console.log("obj THIS IS THE OBJ", obj)
for (let key in obj) {
if(maxVal < obj[key])
maxKey = key   //if we flip these two statements tests fail
maxVal = obj[key] //seems that maxKey is reassiged hence this order 
}

return maxKey
}

module.exports = maxChar;
