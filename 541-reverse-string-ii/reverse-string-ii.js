/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    if (s.length <= 1) return s;
    if (k > s.length) {
        k = s.length;
    }
    let l = 0;
    let r = k - 1;
    let arr = s.split('');
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    let res = arr.slice(0, (2 * k)).join('') + reverseStr(arr.slice(2 * k).join(''), k);
    return res;
};