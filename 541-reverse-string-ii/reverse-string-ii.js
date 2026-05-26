/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split("");
    for (let i = 0; i < s.length; i = (2 * k) + i) {
        let l = i;
        let r = Math.min(l + k - 1, s.length - 1);
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