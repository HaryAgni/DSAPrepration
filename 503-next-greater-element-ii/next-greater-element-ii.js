/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    let ans = Array(nums.length).fill(-1);
    for (let i = (nums.length * 2) - 1; i >= 0; i--) {
        let index = i % nums.length;
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > nums[index]) {
                ans[index] = top;
                break;
            }
            else stack.pop();
        }
        stack.push(nums[index]);
    }
    return ans;
};