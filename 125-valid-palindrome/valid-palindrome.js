/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length == 1) return true;
    s = s.toLowerCase();
    let set = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
    let str = "";
    for (i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            str += s[i].toLowerCase();
        }
    }
    console.log(str)
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
};