/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    nums = [...nums, ...nums];
    let res = Array(nums.length).fill(-1);
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > nums[i]) {
                res[i] = top;
                break;
            }
            stack.pop();
        }
        stack.push(nums[i]);
    }
    return res.slice(0, nums.length / 2);
};