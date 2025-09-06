/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let str1 = createStr(s1);
    for (let i = 0; i <= s2.length - s1.length; i++) {
        let j = i + s1.length;
        let k = i;
        let currStr = "";
        while (k < j) {
            currStr += s2[k];
            k++;
        }
        let str2 = createStr(currStr);
        if (str1 == str2) return true;
    }
    return false;
};

var createStr = function (str) {
    let freqArr = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        freqArr[str.charCodeAt(i) - 97]++;
    }
    return freqArr.join('#');
}