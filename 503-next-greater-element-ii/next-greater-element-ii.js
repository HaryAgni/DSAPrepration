/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let ans = Array(nums.length).fill(-1);
    let stack = [];
    for (let i = nums.length * 2 - 1; i >= 0; i--) {
        let index = i % nums.length;
        let val = nums[index];
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > val) {
                ans[index] = top;
                break;
            }
            else stack.pop();
        }
        stack.push(val);
    }
    return ans;
}