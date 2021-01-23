
//shorter version
let mergeKLists = function(lists) {
  const merge = (l1head, l2head) => { //fux to merge 2 LLists

    if (!l1head || !l2head) return l1head || l2head; //return the L that exists
    let node = {}; //not sure why this is an obj
    const root = node; //we're using root in the other fux below
    while (l1head && l2head) {
      if (l1head.val <= l2head.val) {  //we sort values and save them in node.next
        node.next = l1head;
        l1head = l1head.next;
      } else {
        node.next = l2head;
        l2head = l2head.next;
      }
      node = node.next; //itirating through the list, node represents a empty Node
    }
    if (l1head) node.next = l1head; //if something is left over from each List
    if (l2head) node.next = l2head;
    return root.next;
  }

  let root = lists[0];  //this is code to merge k lists
                        //root is referrign to the head of the first list
  for (let i = 1; i < lists.length; i++) { //loop through the rest of lists
    root = merge(root, lists[i]);  //call merge 2 lists fux reassigning root and increasing i //all is saved in root
  }

  return root || null; //this way is new
};

/*
function ListNode(val) {
  this.val = val
  this.next = null
}

function merge2Lists(list1, list2) {
  let mergedList = new ListNode(0)

  let curr = mergedList
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      curr.next = list1
      list1 = list1.next
    } else {
      curr.next = list2
      list2 = list2.next
    }
    curr = curr.next
  }
  curr.next = list1 !== null ? list1 : list2
  return mergedList.next
}

function mergeNLists(lists) {
  if (lists.length === 0) {
    return null
  }
  let interval = 1
  while (lists.length > interval) {
    let idx = 0
    while (idx + interval < lists.length) {
      lists[idx] = merge2Lists(lists[idx], lists[idx + interval])
      idx += interval * 2
    }
    interval *= 2
  }
  return lists[0]
}
*/
