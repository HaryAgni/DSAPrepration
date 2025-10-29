/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let set = new Set('aeiou');
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? ++map[s[i]] : 1;
    }
    let keys = Object.keys(map);
    let cMax = 0;
    let vMax = 0;
    for (let i = 0; i < keys.length; i++) {
        let val = map[keys[i]];
        if (set.has(keys[i])) vMax = Math.max(vMax, val);
        else cMax = Math.max(cMax, val);
    }
    return vMax + cMax;
};