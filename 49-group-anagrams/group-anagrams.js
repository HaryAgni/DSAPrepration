/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let s = strs[i];
        let freq = Array(26).fill(0);
        let base = 'a'.charCodeAt(0);
        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt(0) - base;
            freq[index]++;
        }
        let key = '';
        for (j = 0; j < 26; j++) {
            key = key + '#' + freq[j];
        }
        if (map[key]) {
            map[key].push(s);
        } else {
            map[key] = [s];
        }
    }
    return Object.keys(map).map(val => map[val]);
};