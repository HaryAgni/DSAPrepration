/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let sMap = {};
    let tMap = {};
    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = sMap[s[i]] ? ++sMap[s[i]] : 1;
        tMap[t[i]] = tMap[t[i]] ? ++tMap[t[i]] : 1;
    }
    for (const key in sMap) {
        if (!tMap[key] || sMap[key] !== tMap[key]) return false;
    }
    return true;

};