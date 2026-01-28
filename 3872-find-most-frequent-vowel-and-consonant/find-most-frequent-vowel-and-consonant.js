/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let map = {};
    let set = new Set('aeiou');
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? ++map[s[i]] : 1;
    }
    cMax = 0;
    vMax = 0;
    let keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
        if (set.has(keys[i])) vMax = Math.max(vMax, map[keys[i]])
        else cMax = Math.max(cMax, map[keys[i]])
    }
    return vMax + cMax;
};