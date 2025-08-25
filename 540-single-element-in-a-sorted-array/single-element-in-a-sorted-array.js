/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let start = 0
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (mid > 0 && nums[mid - 1] == nums[mid]) {
            let leftCount = mid - 1 - start;
            if (leftCount % 2 == 1) end = mid - 2;
            else start = mid + 1;
        }
        else if (mid < nums.length - 1 && nums[mid] == nums[mid + 1]) {
            let leftCount = mid - start;
            if (leftCount % 2 == 1) end = mid - 1;
            else start = mid + 2;
        }
        else return nums[mid];
    }
};