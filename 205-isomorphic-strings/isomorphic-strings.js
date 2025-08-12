/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let obj = {};
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] && obj[s[i]] !== t[i]) return false;
        else {
            if (!obj[s[i]] && set.has(t[i])) return false;
            obj[s[i]] = t[i];
            set.add(t[i]);
        }

    }
    return true;
};