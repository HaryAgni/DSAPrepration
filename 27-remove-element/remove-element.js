/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let prev = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[prev] == val && nums[i] !== val) {
            let temp = nums[i];
            nums[i] = nums[prev];
            nums[prev] = temp;
            prev++;
        }
        else if (nums[i] !== val) {
            prev++
        }
    }
    return prev;
};