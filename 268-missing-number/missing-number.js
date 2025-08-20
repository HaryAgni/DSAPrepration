/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let len = nums.length;
    let sum = len * (len + 1) / 2;
    let arrSum = 0;
    for (let i = 0; i < len; i++) {
        arrSum += nums[i];
    }
    return sum - arrSum;
};