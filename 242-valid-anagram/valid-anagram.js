/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let sObj = {}
    for (let i = 0; i < s.length; i++) {
        sObj[s[i]] = sObj[s[i]] ? ++sObj[s[i]] : 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!sObj[t[i]] || sObj[t[i]] == 0) return false;
        sObj[t[i]]--;
    }
    return true;
};