/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] == nums2[nums2.length - 1]) res.push(-1);
        else {
            let index = 0;
            while (nums2[index] !== nums1[i]) {
                index++;
            }
            let temp = nums2[index];
            for (let j = index + 1; j < nums2.length; j++) {
                temp = Math.max(nums2[j], temp);
                if (temp > nums1[i]) {
                    res.push(temp);
                    break;
                }
            }
            if (temp == nums1[i]) res.push(-1);
        }
    }
    return res;
};