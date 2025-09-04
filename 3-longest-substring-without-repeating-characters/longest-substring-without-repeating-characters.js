/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let prevStr = "";
    for (let i = 0; i < s.length; i++) {
        let currStr = "";
        let set = new Set();
        for (let j = i; j < s.length; j++) {
            if (set.has(s[j])) break;
            else {
                set.add(s[j]);
                currStr += s[j];
            }
        }
        if (currStr.length > prevStr.length) prevStr = currStr;
    }
    return prevStr.length;
};