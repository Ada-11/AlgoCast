// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next =null){
    this.data = data
    this.next= next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }
insertFirst(data){
  let nuNode = new Node(data, this.head)
  this.head = nuNode
  // this.head = new Node(data, this.head) in one line
}

}
module.exports = { Node, LinkedList };
