/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {};
    let stack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > nums2[i]) {
                map[nums2[i]] = top;
                break;
            }
            stack.pop();
        }
        if (!stack.length) map[nums2[i]] = -1;
        stack.push(nums2[i]);

    }
    return nums1.map(i => map[i]);
};