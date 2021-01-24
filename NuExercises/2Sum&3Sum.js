/*
Given an array of distinct integers and an integer representing a target sum, write a function that returns an array of all triplets in the input array that sum to the target sum.

BOTH CHOICES ARE O(N2)
*/
function arraySumOfThree(arr, target){
//sort the output
arr.sort((a,b)=> a-b)
const solution = []

for( let i=0; i<arr.length-2; ++i){
  let current = arr[i]
  let left = i+1;
  let right = arr.length-1
while (left<right){
let currSum = current + left + right
 if(currSum === target){
   solution.push([current,arr[left], arr[right]])
   left++
   right--
 } else if(currSum < target){
   left++
 } else if (currSum > target){
   right--
 }

}

}
 return solution
}

//Version II with an Obj/map

function arrayOfSumThreeB(arr, target){
 let result = []
  for( let i = 0; i<arr.length-1; ++i){
    let diff = target - arr[i]
    let map = {}
  for( let j = i+1; j<arr.length; ++j){
    if(map[diff- arr[j]]){
      result.push([diff-arr[j], arr[i], arr[j]]) //these r the 3 nums
    } else{
      map[arr[j]]= true
    }

  }

  }
  return result
}

//Two Sum
/*
Given an array arr consisting of N integers, sorted in ascending order (least to greatest), and a separate number (a sum), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

*/
function twoSum(arr, target){
  let result = []
  let left = 0
  let right= arr.length-1
  while( left<right){
   if(left+right===target){
     result([left, right])
     right--
     left++
   }else if(left+right<target){
     left++
   }else if(left+right>target){
     right--
   }

  }
return result
}
