/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowels = new Set("aeiou");
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] ? ++obj[s[i]] : 1;
    }
    let vowelMax = 0;
    let consonantMax = 0;
    let objKeys = Object.keys(obj);
    for (i = 0; i < objKeys.length; i++) {
        if (vowels.has(objKeys[i])) {
            vowelMax = Math.max(vowelMax, obj[objKeys[i]]);
        }
        else {
            consonantMax = Math.max(consonantMax, obj[objKeys[i]]);
        }
    }
    return vowelMax + consonantMax;
};