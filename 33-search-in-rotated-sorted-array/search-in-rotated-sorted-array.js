/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = -1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target == nums[mid]) return mid;
        else if (nums[mid] > nums[mid + 1]) break;
        else if (nums[mid] > nums[end]) start++;
        else end--;
    }
    if (target >= nums[0] && target < nums[mid]) {
        start = 0;
        end = mid - 1;
    }
    else {
        start = mid + 1;
        end = nums.length - 1;
    }
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return -1;

};