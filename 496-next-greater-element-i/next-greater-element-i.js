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
            let temp = -1;
            for (let j = index + 1; j < nums2.length; j++) {
                if (nums2[j] > nums1[i]) {
                    temp = nums2[j];
                    break;
                }
            }
            res.push(temp);
        }
    }
    return res;
};