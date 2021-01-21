/*
Recursion is a function that calls itself.
Json.parse/json.stringify
DOM traversal/ document.getElementById()

1) Needs a base case when function stops/ needs to return alw
2) In the recursive call needs a different input each time & return
For arr use slice/ spread/ concat
For str use slice, substr, substring /diff btw substr & substring is that the former has first elem& num of elem to cut, the latter has first elem and the elem to cut up to
For OBJ use spread operator or Object.assign
*/

function isPalindromeRecursive(str){
  if(str.length === 1) return true
  if(str[0]!==str[str.length-1]) return false

  return isPalindromeRecursive(str.slice(1,-1))
}
//someRecursive accepts an arr and a callback, returns true if at least one elem from the arr used as arg in the callback returns true. Else returns false

function someRecursive(arr, callback){
  if(arr.length === 0) return false
  if(callback(arr[0])) return true
return someRecursive(arr.slice(1), callback)
}

//Write a recursive function that takes an array of arrays as arg and returns a flattened arr back.

function flatten(arr){
  let nuArr = []
  for(let i = 0; i<arr.length; ++i){
    if(Array.isArray(arr[i])){
     nuArr = nuArr.concat(flatten(arr[i]))
    }else{
      nuArr.push(arr[i])
    }
    return nuArr
  }

}
//reverse a string
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

