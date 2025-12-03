/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let set = new Set("abcdefghijklmnopqrstuvwxyz1234567890");
    let i = 0;
    
    let j = s.length - 1;
    while (i < j) {
        if (!set.has(s[i].toLowerCase())) i++;
        else if (!set.has(s[j].toLowerCase())) j--;
        else if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        else {
            i++;
            j--;
        }
    }
    return true;
};