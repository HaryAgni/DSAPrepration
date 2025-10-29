/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    sMap = {};
    tMap = {};
    for (let i = 0;i< s.length; i++) {
        sMap[s[i]] = sMap[s[i]] ? ++sMap[s[i]] : 1;
        tMap[t[i]] = tMap[t[i]] ? ++tMap[t[i]] : 1;
    }
    let keys = Object.keys(sMap);
    for (let i = 0; i < keys.length; i++) {
        if (!tMap[keys[i]] || sMap[keys[i]]!==tMap[keys[i]]) return false;
    }
    return true;
};