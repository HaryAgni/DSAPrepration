/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let val = strs[i];
        let freq = Array(26).fill(0);
        let key = "";
        for (let j = 0; j < val.length; j++) {
            let index = val[j].charCodeAt(0) - 'a'.charCodeAt(0);
            freq[index] = ++freq[index];
        }
        for (let j = 0; j < 26; j++) {
            key += '#' + freq[j];
        }
        if (!map[key]) map[key] = [val];
        else map[key].push(val);
    }
    return Object.keys(map).map(val => map[val]);
};