/*var reverseList = function(head) {
  let prev = null
  let current = head
  while(current.next){
      prev = current.next
      current.next = current
      current = prev
  }
      head=current

  };
*/
  var reverseList = function(head) {
      let prev = null
      while(head){
          const next = head.next
          head.next = prev
          prev = head
          head = next
      }
      return prev
  };
