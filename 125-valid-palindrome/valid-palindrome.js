/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let set = new Set('1234567890abcdefghijklmnopqrstuvwxyz');
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (!set.has(s[l].toLowerCase())) l++;
        else if (!set.has(s[r].toLowerCase())) r--;
        else if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        else {
            l++;
            r--;
        }
    }
    return true;
};