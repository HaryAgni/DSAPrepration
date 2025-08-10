/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowels = new Set("aeiou");
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
        }
        else {
            obj[s[i]] = 1;
        }
    }
    let vowelMax = 0;
    let consonantMax = 0;
    for (i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            vowelMax = Math.max(vowelMax, obj[s[i]]);
        }
        else {
            consonantMax = Math.max(consonantMax, obj[s[i]]);
        }
    }
    return vowelMax + consonantMax;
};