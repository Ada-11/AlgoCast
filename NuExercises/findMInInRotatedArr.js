/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums, return the minimum element of this array.

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Medium level
*/
//since its sorted arr requires binary search
//binary search is done with a while loop and 3 pointers

 const findMin = function(nums) {
let left = 0
let right = nums.length-1

while(left<right){
let middle = Math.floor((left+right)/2)
//if this happens means smth is wrong with the right side
if(nums[middle]>nums[right])left = middle+1 //so we restart left
else right = middle //if the above is not true we reassign right

}
return nums[left]

};
