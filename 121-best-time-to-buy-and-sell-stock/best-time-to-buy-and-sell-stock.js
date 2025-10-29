/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProfit = function (nums) {
    let maxProfit = 0;
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        maxProfit = Math.max(maxProfit, nums[i] - min);
    }
    return maxProfit;
};