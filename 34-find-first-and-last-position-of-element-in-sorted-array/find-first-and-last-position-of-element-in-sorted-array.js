/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length == 1 && nums[0] == target) return [0, 0];
    let start = 0;
    let end = nums.length - 1;
    let res = [-1, -1];
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] >= target) end = mid;
        else start = mid + 1;
        if (nums[start] == target) {
            res[0] = start;
            break;
        }
    }
    start = 0;
    end = nums.length - 1;
    while (start < end) {
        let mid = start + Math.ceil((end - start) / 2);
        if (nums[mid] <= target) start = mid;
        else end = mid - 1;
        if (nums[end] == target) {
            res[1] = end;
            break;
        }
    }
    return res;
};