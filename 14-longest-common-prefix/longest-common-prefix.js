/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ans = '';
    let str = strs[0];
    for (let i = 0; i < str.length; i++) {
        let val = str[i];
        for (j = 0; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== val) return ans;
            else if (j == strs.length - 1) ans += val;
        }
    }
    return ans;
};