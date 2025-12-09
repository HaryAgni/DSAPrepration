/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    
    nums = nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 || nums[nums.length - 1] < 0) break;
        if (i == 0 || nums[i - 1] !== nums[i]) {
            twoSum(i, nums, ans);
        }
    }
    return ans;
};
var twoSum = function (curr, nums, ans) {
    let l = curr + 1;
    let r = nums.length - 1;
    while (l < r) {
        let sum = nums[curr] + nums[l] + nums[r];
        if (sum > 0) r--;
        else if (sum < 0) l++;
        else {
            ans.push([nums[curr], nums[l], nums[r]]);
            l++;
            r--;
            while (nums[l] == nums[l - 1] && l < r) l++;
        }
    }
}