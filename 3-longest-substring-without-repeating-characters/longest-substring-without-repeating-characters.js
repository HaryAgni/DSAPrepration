/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = {};
    let maxWindow = 0;

    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (s[j] in map && map[s[j]] >= i) i = map[s[j]] + 1;
        map[s[j]] = j;
        maxWindow = Math.max(maxWindow, j - i + 1);
        j++;
    }
    return maxWindow;
};