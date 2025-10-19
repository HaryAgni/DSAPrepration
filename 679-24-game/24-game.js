/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
  const EPSILON = 1e-6;
  function helper(nums) {
    if (nums.length === 1) {
      return Math.abs(nums[0] - 24) < EPSILON;
    }
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i === j) continue;
        let next = [];
        for (let k = 0; k < nums.length; k++) {
          if (k !== i && k !== j) next.push(nums[k]);
        }
        for (let val of compute(nums[i], nums[j])) {
          next.push(val);
          if (helper(next)) return true;
          next.pop(); 
        }
      }
    }

    return false;
  }

  function compute(a, b) {
    let results = [a + b, a - b, b - a, a * b];
    if (Math.abs(b) > 1e-6) results.push(a / b);
    if (Math.abs(a) > 1e-6) results.push(b / a);
    return results;
  }

  return helper(cards.map(x => x * 1.0));

};