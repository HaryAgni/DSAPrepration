/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let m1 = {};
    let m2 = {};
    for (let i = 0; i < s.length; i++) {
        m1[s[i]] = m1[s[i]] ? ++m1[s[i]] : 1;
        m2[t[i]] = m2[t[i]] ? ++m2[t[i]] : 1;
    }
    let keys = Object.keys(m1);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (!m2[key] || m1[key] !== m2[key]) return false;
    }
    return true;
};