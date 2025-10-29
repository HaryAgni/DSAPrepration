/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let st = strs[0];
    let res = '';
    for (let i = 0; i < st.length; i++) {
        for (j = 0; j < strs.length; j++) {
            if (st[i] !== strs[j][i] || i == strs[j].length) return res;
        }
        res += st[i];
    }
    return res;
};