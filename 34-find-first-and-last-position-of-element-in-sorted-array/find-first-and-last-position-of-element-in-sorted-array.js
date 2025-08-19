/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = [-1, -1];
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] < target) start = mid + 1;
        else end = mid;
    }
    if (nums[start] == target) ans[0] = start;
    start = 0;
    end = nums.length - 1;
    while (start < end) {
        let mid = Math.ceil((start + end) / 2);
        if (nums[mid] > target) end = mid - 1;
        else start = mid;
    }
    if (nums[end] == target) ans[1] = end;
    return ans;
};