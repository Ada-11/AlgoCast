// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.head
  let twoxFaster = list.head.next

  while (twoxFaster.next && twoxFaster.next.next){

    slow=slow.next
    twoxFaster =twoxFaster.next.next
    if (twoxFaster === slow){
      return true
    }
  }
  return false
}

module.exports = circular;
