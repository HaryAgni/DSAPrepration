/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let q = [];
    let ans = [];
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        while (q.length && q[q.length - 1] < nums[j]) q.pop();
        q.push(nums[j]);
        if (j >= k - 1) {
            ans.push(q[0]);
            q[0] == nums[i] && q.shift();
            i++;
        }
    }
    return ans;
};