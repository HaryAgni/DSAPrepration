/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let str = strs[0];
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== str[i]) return ans;
        }
        ans += str[i];
    }
    return ans;
};
