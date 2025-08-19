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
        while (nums[start] == target || nums[end] == target) {
            if (nums[start] == target) start--;
            if (nums[end] == target) end++;
        }
        return [start + 1, end - 1];
    }
    return [-1, -1];
};