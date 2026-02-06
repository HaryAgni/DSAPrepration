/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (nums) {
    let ans = Array(nums.length).fill(0);
    
    let stack = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (nums[top] <= nums[i]) stack.pop();
            else {
                ans[i] = top - i;
                break;
            }
        }
        stack.push(i);
    }
    return ans;
};