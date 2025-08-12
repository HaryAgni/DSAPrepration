/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let pre = strs[0];
    for (let i = 0; i < pre.length; i++) {
        let chr = pre[i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].length == i || strs[j][i] !== chr) return pre.substring(0, i);
        }
    }
    return pre;
};