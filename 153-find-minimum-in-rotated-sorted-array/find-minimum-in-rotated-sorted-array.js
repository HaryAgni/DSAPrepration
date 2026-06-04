/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[l] <= nums[r]) return nums[l];
        else if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
        else if (nums[mid] > nums[l]) l = mid;
        else r = mid;
    }
    return nums[l];
};