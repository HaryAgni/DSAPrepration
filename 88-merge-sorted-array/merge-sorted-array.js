/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    numsOneCopy = [];
    for (let i = 0; i < m; i++) {
        numsOneCopy[i] = nums1[i];
    }
    let p1=0;
    let p2=0;
    for (let i = 0; i < m + n; i++) {
        if(numsOneCopy[p1]<nums2[p2] || p2>=nums2.length){
            nums1[i] = numsOneCopy[p1];
            p1++;
        }
        else{
            nums1[i]=nums2[p2];
            p2++;
        }
    }
};