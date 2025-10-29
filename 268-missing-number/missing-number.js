/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0;
    let n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return (n * (n + 1) / 2) - sum;
};