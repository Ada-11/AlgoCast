/*
You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.


Level Medium
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

function search(nums, target) {
let left = 0
let right = nums.length-1

while(left<right){
let middle = Math.floor((left+right)/2)

if(nums[middle]=== target)return middle

//check the sorted left side
// If the middle element is greater than the element to the left
// of it, then that means that the bottom half is strictly increasing
// from left to middle, i.e. it is sorted and we can just do a normal
// binary search.
if(nums[left]<= nums[middle]{
  //check each range of the segment with reg binary search
  if(nums[left]<= target && target< nums[middle]){
    right = middle-1
  }else{
    left = middle +1
  }

 //check the sorted right side
 //if the right side is sorted
}else{
  //check the ranges of target
  // This means that the *top* half must be sorted, because
  // there can only be one place in the entire array where
  // the order is not sorted, and it's on the bottom half.
  if(nums[middle]< target&& target<= nums[right]){
         // 'recurse' down this side
    left= middle+1
  }else{
         // 'recurse' down this side
    right = middle-1
  }
 }
}
return -1
}
