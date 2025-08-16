/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    let res = Array(nums.length * 2).fill(-1);
    for (let i = (nums.length * 2) - 1; i >= 0; i--) {
        let index = i % nums.length;
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > nums[index]) {
                res[i] = top;
                break;
            }
            stack.pop();
        }
        stack.push(nums[index]);
    }
    return res.slice(0, nums.length);
};