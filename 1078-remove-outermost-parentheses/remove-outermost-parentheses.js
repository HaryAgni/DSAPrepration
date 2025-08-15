/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let s1 = [];
    let s2 = [];
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            if (s1.length == 0) s1.push(s[i]);
            else {
                s2.push(s[i]);
                res += s[i];
            }
        }
        else {
            if (s2.length == 0) s1.pop();
            else {
                s2.pop();
                res += s[i];
            }
        }
    }
    return res;
};