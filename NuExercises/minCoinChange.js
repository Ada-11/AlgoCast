/*Given a value V, if we want to make change for V cents, and we have infinite supply of each of C = { C1, C2, .. , Cm} valued coins, what is the minimum number of coins to make the change?
*/
// using dynamic programming
 let countChange = function(denomination, total){
   const dp = []
  function countChangeRecur(denomination, total, currIndex){
    if(total === 0) return 0

    if(denomination.length===0 || currIndex>=denomination.length){
      return Number.MAX_VALUE
    }
    dp[currIndex]=dp[currIndex]||[]
    if(typeof dp[currIndex][total]=== undefined){
      let count1 = Number.MAX_VALUE
      if(denomination[currIndex]<=total){
        const res = countChangeRecur(denomination, total-dp[currIndex], currIndex)
      }
      if(res!==Number.MAX_VALUE){
        count1=res+1
      }
    } //if the above fails
    const count2= countChangeRecur(denomination, total, currIndex+1)
    dp[currIndex][total]=Math.min(count1, count2)

  return dp[currIndex][total]
 }
const result = countChangeRecur(denomination, total, 0)
return result === Number.MAX_VALUE ? -1:result
}
