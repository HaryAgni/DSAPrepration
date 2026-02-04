/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let ans = "";
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') count++;
        else count--;
        if ((count > 1 && s[i] == '(') || (count !== 0 && s[i] == ')')) ans += s[i];
    }
    return ans;
};