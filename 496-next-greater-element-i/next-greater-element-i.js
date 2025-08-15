/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {};
    let stack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        let temp = stack[stack.length - 1];
        while (stack.length) {
            if (temp > nums2[i]) {
                map[nums2[i]] = temp;
                break;
            }
            stack.pop();
            temp = stack[stack.length - 1];
        }
        if (stack.length == 0) map[nums2[i]] = -1;
        stack.push(nums2[i]);
    }
    return nums1.map(i => map[i]);
};