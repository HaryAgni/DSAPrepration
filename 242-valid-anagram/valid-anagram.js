/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let sObj = {}
    let tObj = {};
    for (let i = 0; i < s.length; i++) {
        sObj[s[i]] = sObj[s[i]] ? ++sObj[s[i]] : 1;
        tObj[t[i]] = tObj[t[i]] ? ++tObj[t[i]] : 1;
    }
    let keys = Object.keys(sObj);
    for (let i = 0; i < keys.length; i++) {
        if (!tObj[keys[i]] || sObj[keys[i]] !== tObj[keys[i]]) return false;
    }
    return true;
};