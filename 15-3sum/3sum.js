/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ans = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 || nums[nums.length - 1] < 0) break;
        else if (i == 0 || nums[i] !== nums[i - 1]) {
            twoSum(i, nums, ans);
        }
    }
    return ans;
};

var twoSum = function (i, nums, ans) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
        let sum = nums[i] + nums[l] + nums[r];
        if (sum > 0) r--;
        else if (sum < 0) l++;
        else {
            ans.push([nums[i], nums[l], nums[r]]);
            l++;
            r--;
            while (l < r && nums[l] == nums[l - 1]) l++;
        }
    }
}