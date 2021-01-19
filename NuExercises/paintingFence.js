/*

Given a fence with n posts and k colors, find out the number of ways of painting the fence such that at most 2 adjacent posts have the same color.
*/


function paintingFence(n, k){
  if(n===0 || k === 0) return 0 //zero ways
  if(n===1) return k //k ways for one post
  if(n===2) return k*k  //max ways is k*k
  let same = k //when adj posts r same color /treated as 1 post
  let diff = k*(k-1)  //when adjacent posts r diff colors
  for (let i=3; i<=n; ++i){
    //for other posts we have (diff+ temp)*(k-1) ways
    let temp = same //save the prev same
    same = diff     //new same is curr diff
    diff = (diff+ temp)*(k-1) 
  }
 return diff+same  //returns new same and new diff
}
