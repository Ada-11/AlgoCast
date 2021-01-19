/*
Check for balanced parentheses in an expression. Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or { ) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

*/

function balancedBrackets(s){

let stack = []
let map = {
  "{":"}",
  "(":")",
  "[":"]"
}

for( let i = 0; i< s.length;++i){

  if(s[i]==="{"||s[i]==="("||s[i]==="["){
     stack.push(s[i])
  }else if( s[i]!== map[stack.pop()] ){
    return false
  }
 return stack.length? false:true
}

}
