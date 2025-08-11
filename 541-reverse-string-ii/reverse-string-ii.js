/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split('');
    for (i = 0; i < s.length; i += k * 2) {
        let l = i;
        let r = Math.min(i + k - 1, s.length - 1);
        while (l < r) {
            let temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
        }
    }
    return s.join("");
};