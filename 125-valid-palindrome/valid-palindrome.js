/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let set = new Set('abcdefghijklmnopqrstuvwxyz1234567890');
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        let a = s[l].toLowerCase();
        let b = s[r].toLowerCase();
        console.log(a,b)
        if (!set.has(a)) l++;
        else if (!set.has(b)) r--;
        else if (a !== b) return false;
        else {
            l++;
            r--;
        }
    }
    return true;
};