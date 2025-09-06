/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let hashA = Array(26).fill(0);
    let hashB = Array(26).fill(0);
    let n = s1.length;
    let m = s2.length;
    let base = 'a'.charCodeAt(0);
    for (let i = 0; i < n; i++) {
        hashA[s1.charCodeAt(i) - base]++;
        hashB[s2.charCodeAt(i) - base]++;
    }

    let i = 0;
    let j = i + n - 1;
    while (j < m) {
        if (isHashSame(hashA, hashB)) return true;
        hashB[s2.charCodeAt(i) - base]--;
        i++;
        j++;
        hashB[s2.charCodeAt(j) - base]++;
    }
    return false;
};
var isHashSame = function (hashA, hashB) {
    for (let i = 0; i < 26; i++) {
        if (hashA[i] !== hashB[i]) return false;
    }
    return true;
}