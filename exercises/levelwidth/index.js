// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
 const queue = [root, 's'];
 const counter = [0];

 while (queue.length >1){
  const node = queue.shift();  //steps from BFTraversal

  if (node === 's'){
    counter.push(0);
    queue.push('s');
  } else {
    queue.push(...node.children);
    counter[counter.length -1]++;

  }

 }
 return counter;
}


//whenever there is a refer to the root node, there's no tree, we're working with node class ( data & children)
//2- width word == BF traversal

module.exports = levelWidth;
