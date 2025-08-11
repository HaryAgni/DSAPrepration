/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    let l = 0;
    let r = str.length - 1;
    console.log(str);
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
};