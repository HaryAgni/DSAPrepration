/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let str = strs[0];
    let pre = "";
    for (let i = 0; i < str.length; i++) {
        let curr = str[i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== curr || i >= strs[j].length) return pre;
        }
        pre += curr;
    }
    return pre;
};