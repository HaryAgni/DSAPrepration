/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let set = new Set('abcdefghijklmnopqrstuvwxyz1234567890');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!set.has(s[left].toLowerCase())) left++;
        else if (!set.has(s[right].toLowerCase())) right--;
        else {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
    }
    return true;
};