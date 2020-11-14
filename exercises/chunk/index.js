// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let arrChunk = []
  for(let i=0; i<array.length; ++i){
   let last = arrChunk[arrChunk.length - 1] //take the last elem in the chunk arr
    if(!last || last.length === size) arrChunk.push([array[i]])
    else last.push(array[i])
  }
 return arrChunk
}
//WITH SLICE

// function chunk(array, size) {  //with slice
//   let chunkedArr = []
//   let index = 0
//   while(index<array.length){
//     let chunk = array.slice(index, index+size)
//     chunkedArr.push(chunk)
//     index+=size
//   }

//  return chunkedArr
// }

module.exports = chunk;
