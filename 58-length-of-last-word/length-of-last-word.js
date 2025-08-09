/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let end = s.length - 1;
    let count = 0;
    while (end >= 0) {
        if (s[end] !== " ") count++;
        else if (count > 0) break;
        end--;
    }
    return count;
};