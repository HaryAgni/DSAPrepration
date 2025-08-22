/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let set = new Set('aeiou');
    let vowels = {};
    let consonant = {};
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) vowels[s[i]] = vowels[s[i]] ? ++vowels[s[i]] : 1;
        else consonant[s[i]] = consonant[s[i]] ? ++consonant[s[i]] : 1;
    }
    let vMax = 0;
    let cMax = 0;
    let vKeys = Object.keys(vowels);
    let cKeys = Object.keys(consonant);
    for (let i = 0; i < vKeys.length; i++) {
        vMax = Math.max(vMax, vowels[vKeys[i]]);
    }
    for (let i = 0; i < cKeys.length; i++) {
        cMax = Math.max(cMax, consonant[cKeys[i]]);
    }
    return vMax + cMax;
};