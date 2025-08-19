/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] == nums[mid + 1]) {
            let leftCount = mid - start;
            if (leftCount % 2 == 1) end = mid - 1;
            else start = mid + 2;
        }
        else if (nums[mid] == nums[mid - 1]) {
            let leftCount = mid - 1 - start;
            if (leftCount % 2 == 1) end = mid - 2;
            else start = mid + 1;
        }
        else return nums[mid];
    }
    return nums[start];
};