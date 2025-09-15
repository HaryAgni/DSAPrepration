/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (arr) {
    let l = 0;
    
    let r = arr.length - 1;
    let max = 0;
    while (l < r) {
        let minHeight = Math.min(arr[l], arr[r]);
        let area = minHeight * (r - l);
        max = Math.max(area, max);
        if (arr[l] > arr[r]) r--;
        else l++;
    }
    return max;
};