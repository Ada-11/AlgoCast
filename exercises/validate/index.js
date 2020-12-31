// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

//with RECURSION

function validate(node, min = null, max = null) {
   //fux takes node, left and right as arg

  if(max !== null && node.data > max) { //
    return false; // the tree is not a bSt
  }
  if(min!== null && node.data < min){
    return false;     //tree is not a BST
  }
  if (node.left && !validate(node.left, min, node.data)){    //maxis default
      return false;
  }
  if (node.right && !validate(node.right, node.data, max)){   //min is default

    return false;
}
return true;

}

module.exports = validate;
