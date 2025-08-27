/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let sum = nums[start] + nums[end];
        if (sum > target) end--;
        else if (sum < target) start++;
        
        else return [start + 1, end + 1];
    }
};