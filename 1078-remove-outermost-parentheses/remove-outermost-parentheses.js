/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let count = 0;
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') count++
        else count--;
        if (count > 1 || (count == 1 && s[i] == ')')) ans += s[i];
    }
    return ans;
};