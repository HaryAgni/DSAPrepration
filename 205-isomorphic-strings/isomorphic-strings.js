/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let sMap = {};
    let tMap = {};
    for (let i = 0; i < s.length; i++) {
        if ((sMap[s[i]] && sMap[s[i]] !== t[i]) || tMap[t[i]] && tMap[t[i]] !== s[i]) return false;
        if (!sMap[s[i]]) sMap[s[i]] = t[i];
        if (!tMap[t[i]]) tMap[t[i]] = s[i];
    }
    return true;
};