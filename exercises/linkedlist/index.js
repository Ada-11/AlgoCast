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
removeAt(index){
 if (!this.head) return
  if ( index ===0) {
  this.head = this.head.next
    return
  }
  else {
    let prev = this.getAt(index-1)
    let node = this.getAt(index)

    if(node && prev) prev.next = node.next

  }
}
// insertAt(data, index){
//   let nuNode = new Node(data)
//   if(!this.head){
//   this.head= nuNode
//   return
//   }

//   if(index===0){
//     nuNode.next=this.head
//     this.head=nuNode
//     //this.head= new Node(data, this.head)
//     return
//   }
//   let prevNode = this.getAt(index-1)
//   let currNode = this.getAt(index)
//   if (prevNode && currNode){

//     nuNode.next=currNode
//     prevNode.next=nuNode
//   } else if (!currNode){
//     prevNode.next=nuNode
//     nuNode.next=null
//   }else {
//     const last = getLast()
//     last.next=nuNode
//     nuNode.next = null
//    }
//   }  //my solution, last test not passing

//Stephen's solution

insertAt(data, index){
  if(!this.head){
      this.head= new Node(data)
      return
      }
  if(index===0){
    this.head = new Node(data, this.head)
    return
  }
  const previous = this.getAt(index-1) || this.getLast()
  const node = new Node(data, previous.next)
  previous.next = node

}
// forEach(fn){
//   if(!this.head) return
//   let node = this.head
//   while (node){
//     fn(node)
//     node=node.next
//   }
//   return this.head
// }
forEach(fn){
  let node = this.head
  let counter = 0
  while (node){
    fn(node, counter)
    node=node.next
    counter++
  }
}
  *[Symbol.iterator]() {
    let node = this.head
    while(node){
     yield node
     node=node.next
    }
  }
}

module.exports = { Node, LinkedList };
