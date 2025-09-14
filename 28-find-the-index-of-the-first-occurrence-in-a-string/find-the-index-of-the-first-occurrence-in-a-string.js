/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let lps = Array(needle.length).fill(0);
    let i = 0;
    let j = 1;
    while (j < needle.length) {
        if (needle[i] == needle[j]) {
            lps[j] = i + 1;
            i++;
            j++;
        }
        else {
            if (i > 0) {
                i = lps[i - 1];
            }
            else j++;
        }
    }
    i = 0;
    j = 0;
    while (j < haystack.length) {
        if (haystack[j] == needle[i]) {
            i++;
            j++;
        }
        else {
            if (i > 0) i = lps[i - 1];
            else j++;
        }
        if (i == needle.length) return j - needle.length;
    }
    return -1;
};