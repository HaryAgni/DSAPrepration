/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {};
    let stack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        if (stack.length !== 0) {
            let temp = stack[stack.length - 1];
            while (stack.length !== 0) {
                if (temp > nums2[i]) {
                    stack.push(nums2[i]);
                    map[nums2[i]] = temp;
                    break;
                }
                stack.pop();
                temp = stack[stack.length - 1];
            }
        }
        if (stack.length == 0) {
            stack.push(nums2[i]);
            map[nums2[i]] = -1;
        }
    }
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        res.push(map[nums1[i]]);
    }
    return res;
};