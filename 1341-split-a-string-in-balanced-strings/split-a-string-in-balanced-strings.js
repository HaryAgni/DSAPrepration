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
        else if (s[i] == "R") {
            r++;
        }
        if (l !== 0 && r !== 0 && l == r) {
            count++;
            l = 0;
            r = 0;
        }
    }
    return count;
};