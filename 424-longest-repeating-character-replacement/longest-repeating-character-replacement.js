/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let i = 0;
    let arr = Array(26).fill(0);
    let maxWindow = 0;
    let maxCount = 0;
    for (let j = 0; j < s.length; j++) {
        arr[s.charCodeAt(j) - 65]++;
        maxCount = Math.max(maxCount, arr[s.charCodeAt(j) - 65]);
        if ((j - i + 1) - maxCount > k) {
            arr[s.charCodeAt(i) - 65]--;
            i++;
        }
        maxWindow = Math.max(maxWindow, j - i + 1);
    }
    return maxWindow;
};