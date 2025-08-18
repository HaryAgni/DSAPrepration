/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        if (nums[start] <= nums[end]) return nums[start];
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
        else if (nums[start] < nums[mid]) {
            start = mid + 1;
        }
        else end = mid;
    }
    return nums[end];
};