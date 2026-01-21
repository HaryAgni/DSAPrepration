/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let currCount = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) maxCount = Math.max(++currCount, maxCount)
        else currCount = 0;
    }
    return maxCount;
};