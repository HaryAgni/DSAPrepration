/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let i = 0;
    let map = {};
    let maxWindow = 0;
    let maxCount = 0;
    for (let j = 0; j < s.length; j++) {
        map[s[j]] = map[s[j]] ? ++map[s[j]] : 1;
        maxCount = Math.max(maxCount, map[s[j]]);
        if ((j - i + 1) - maxCount > k) {
            map[s[i]]--;
            i++;
        }
        maxWindow = Math.max(maxWindow, j - i + 1);
    }
    return maxWindow;
};