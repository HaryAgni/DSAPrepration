/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let l = 0;
    let r = 0;
    let count = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] == "L") {
            l++;
        }
        else {
            r++;
        }
        if (l && r && l == r) {
            count++;
            l = 0;
            r = 0;
        }
    }
    return count;
};