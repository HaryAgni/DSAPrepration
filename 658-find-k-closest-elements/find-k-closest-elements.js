/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    if (k == arr.length) return arr;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (mid + k < arr.length && (arr[mid + k] - x) < (x - arr[mid])) {
            start = mid + 1;
        }
        else end = mid;
    }
    return arr.slice(start, start + k);
};