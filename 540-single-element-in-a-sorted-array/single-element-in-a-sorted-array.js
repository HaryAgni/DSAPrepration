/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        if (nums[m] != nums[m - 1] && nums[m] != nums[m + 1]) {
            return nums[m];
        }
        let left;
        if (nums[m] == nums[m - 1]) {
            left = m - 1;
            if (left % 2 == 0) {
                s = m + 1
            } else {
                e = m - 1
            }
        } else {
            left = m;
            if (left % 2 == 0) {
                s = m + 1
            } else {
                e = m - 1
            }
        }
    }
};