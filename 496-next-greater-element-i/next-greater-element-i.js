/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {};
    let stack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        let val = -1;
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top <= nums2[i]) stack.pop();
            else {
                val = top;
                break;
            }
        }
        map[nums2[i]] = val;
        stack.push(nums2[i]);
    }
    let ans =[];
    for(let i =0;i<nums1.length;i++){
        ans.push(map[nums1[i]]);
    }
    return ans;
};