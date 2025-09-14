/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let n = haystack.length - needle.length;
    for (let i = 0; i <= n; i++) {
        let p1 = i;
        let p2 = 0;
        while (p2 < needle.length) {
            if (haystack[p1] !== needle[p2]) break;
            p1++;
            p2++;
        }
        if (p2 == needle.length) return i;
    }
    return -1;
};