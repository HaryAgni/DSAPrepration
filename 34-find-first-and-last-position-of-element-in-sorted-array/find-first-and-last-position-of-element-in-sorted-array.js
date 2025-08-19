/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = -1;
    let flag = false;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) {
            flag = true;
            break;
        }
        else if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    if (flag) {
        start = mid;
        end = mid;
        while (start > 0 && nums[start - 1] == target) start--;
        while (end < nums.length - 1 && nums[end + 1] == target) end++;
        return [start, end];
    }
    return [-1, -1];
};