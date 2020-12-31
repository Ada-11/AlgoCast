// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data){
    this.data = data;
    this.children = []
  }
  add(data){
    this.children.push(new Node(data))
  }
  remove(data){
    this.children = this.children.filter(node => node.data !== data)
  }


  }


class Tree {
  constructor(){
    this.root = null
  }
  traverseBF(fn){
    let queue = [this.root]
    while (queue.length){
      let node = queue.shift()        //remove from front
        queue.push(...node.children) //add n back w/spread op
        fn(node)                    //calling the callback
      }

}
traverseDF(fn){
let stack = [this.root]
while (stack.length){
  let node = stack.shift()
    stack.unshift(...node.children) //the only diff btw these two is unshift/push
    fn(node)
  }
}
/*
create a nu arr ( queue with BFS and Stack with DFS)
put this.root in the queue/stack
while(queue/stack.length)
take node from the beginning of the arr queue.shift() stack.shift()
spread the children of the current node and push them at the end for BFS or at the begining for DFS
// stack.unshift()- adding children at d beg / queue.push() add child at the end
then call function on current node



*/
}
module.exports = { Tree, Node };
