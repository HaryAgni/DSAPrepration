/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let set = new Set('aeiou');
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) map[s[i]]++;
        else map[s[i]] = 1;
    }
    let vMax = 0;
    let cMax = 0;
    for (const key in map) {
        if (set.has(key)) vMax = Math.max(vMax, map[key]);
        else cMax = Math.max(cMax, map[key]);
    }
    return vMax + cMax;
};