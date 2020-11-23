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
  //the node is added from the beg of the LL becoming the head that's why
   //next is this.head
}
size(){
  let counter = 0
while (this.head){
this.head = this.head.next
counter ++
}
return counter
}

getFirst(){
  return this.head
}
getLast(){
  if (!this.head) return null

  let node = this.head
  while (node){
    if (!node.next) return node

    node= node.next
  }
}
clear(){
  let node = this.head
while (node){
   node=node.next //traversing
   node.next=null  //making the refence null
                    //do we have to delete the node or just not reference it?
  //this.head= null  author's solution doesn't delete nodes in LL
}
}
removeFirst(){
  if (!this.head) {
    return
  }
  this.head=this.head.next //one test fails for no reason here

}
removeLast(){
  if (!this.head) return

  if (!this.head.next){
    this.head= null
    return
  }

  let previous = this.head
  let node = this.head.next
  while (node.next){
    previous=node
    node=node.next

  }
  previous.next = null
}
insertLast(data){

  let lastNode = this.getLast()
  if (lastNode) {
     lastNode.next = new Node(data)
  } else {
    this.head = new Node(data)

  }
}
// getAt(num){
// let counter = 0
// if(!this.head) return null
// if(this.size()< num) return null
// let node = this.head

// while(counter !== num){
//   if(node.next){
//     node=node.next
//     counter++
//   }

// }
// return node
// }
getAt(index){

let counter = 0

//if (!this.head) return null // this case being handled by the loop condition
 let node = this.head
 while (node){
  if (counter === index){
    return node
  }
  counter++
  node = node.next

 }

return null

}


}
module.exports = { Node, LinkedList };
