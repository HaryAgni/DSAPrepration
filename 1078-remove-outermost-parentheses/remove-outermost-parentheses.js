/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let outer = 0;
    let inner = 0;
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            if (outer == 0) outer++;
            else {
                inner++;
                res += s[i];
            }
        }
        else {
            if (inner == 0) outer--;
            else {
                inner--;
                res += s[i];
            }
        }
    }
    return res;
};