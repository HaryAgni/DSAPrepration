/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let currStr = strs[i];
        let freqArr = Array(26).fill(0);
        for (let j = 0; j < currStr.length; j++) {
            let index = currStr[j].charCodeAt() - 'a'.charCodeAt();
            freqArr[index] = ++freqArr[index];
        }
        let key = "";
        for (let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(k) + freqArr[k];
        }
        if (map[key]) map[key].push(currStr);
        else map[key] = [currStr];
    }
    return Object.values(map);
};