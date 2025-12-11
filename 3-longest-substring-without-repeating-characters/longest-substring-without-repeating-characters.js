/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = {};
    let i = 0;

    let maxWindow = 0;
    
    for (let j = 0; j < s.length; j++) {
        if (s[j] in map && map[s[j]] >= i) i = map[s[j]] + 1;
        map[s[j]] = j;
        maxWindow = Math.max(maxWindow, j - i + 1);
    }
    return maxWindow;
};