/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let set = new Set('aeiou');
    let vMax = 0;
    let cMax = 0;
    let base = 'a'.charCodeAt(0);
    let freq = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - base;
        freq[index]++;
        if (set.has(s[i])) vMax = Math.max(vMax, freq[index]);
        else cMax = Math.max(cMax, freq[index]);
    }
    return vMax + cMax;
};