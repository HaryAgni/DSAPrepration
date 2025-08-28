/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let i = 0;
    let n = haystack.length - needle.length;
    while (i <= n) {
        let p1 = 0;
        let p2 = i;
        while (p1 < needle.length) {
            if (needle[p1] !== haystack[p2]) break;
            p1++;
            p2++;
        }
        if (p1 == needle.length) return i;
        i++;
    }
    return -1;
};