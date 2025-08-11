/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let set = new Set("abcdefghijklmnopqrstuvwxyz1234567890");
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        let a = s[l].toLowerCase();
        let b = s[r].toLowerCase();
        if (set.has(a) && set.has(b) && a !== b) return false;
        if ((set.has(a) && set.has(b)) || (!set.has(a) && !set.has(b))) {
            l++;
            r--;
        }
        else if (!set.has(a)) l++;
        else if (!set.has(b)) r--;
    }
    return true;
};