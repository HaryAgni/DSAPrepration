/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let wordCount = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (wordCount > 0 && s[i] == " ") break;
        else if (s[i] !== ' ') wordCount++;
    }
    return wordCount;
};