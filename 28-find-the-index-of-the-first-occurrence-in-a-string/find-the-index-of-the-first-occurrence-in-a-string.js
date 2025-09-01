/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let i = 0;
    let j = 1;
    let lps = [0];
    while (j < needle.length) {
        if (needle[i] == needle[j]) {
            lps[j] = ++i;
            ++j;
        }
        else {
            if (i == 0) {
                lps[j] = 0;
                j++;
            }
            else i = lps[i - 1];
        }
    }
    i = 0;
    j = 0;
    while (i < haystack.length) {
        if (haystack[i] == needle[j]) {
            i++;
            j++;
        }
        else {
            if (j == 0) i++;
            else j = lps[j - 1];
        }
        if (j == needle.length) return i - needle.length;
    }
    return -1;
};