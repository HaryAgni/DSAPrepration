/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (nums) {
    let stack = [];
    let ans = Array(nums.length).fill(0);
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (nums[top] > nums[i]) {
                ans[i] = top - i;
                break;
            }
            else stack.pop();
        }
        stack.push(i);
    }
    return ans;
};