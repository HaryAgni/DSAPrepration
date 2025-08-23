/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let count = 0;
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            count++;
            if (count > 1) res += s[i];
        }
        else {
            count--;
            if (count) res += s[i];
        }
    }
    return res;
};