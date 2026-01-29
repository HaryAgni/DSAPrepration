/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split('')
    for (let i = 0; i < s.length; i = i + (k * 2)) {
        let l = i;
        let r = ((k + i - 1) >= s.length) ? s.length - 1 : (k + i - 1);
        while (l < r) {
            let temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
        }
    }
    return s.join('');
};