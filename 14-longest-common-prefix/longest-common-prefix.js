/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let minStr = strs[0];
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minStr.length) minStr = strs[i];
    }
    let res = '';
    for (let i = 0; i < minStr.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== minStr[i]) return res;
        }
        res += minStr[i];
    }
    return res;
};