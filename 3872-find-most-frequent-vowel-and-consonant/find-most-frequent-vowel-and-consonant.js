/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let set = new Set('aeiou');
    let vMax = 0;
    let cMax = 0;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
        if (set.has(s[i])) {
            vMax = Math.max(vMax, map[s[i]]);
        }
        else {
            cMax = Math.max(cMax, map[s[i]]);
        }
    }
    return vMax + cMax;
};