/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let arr = Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            let index = strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0);
            ++arr[index];
        }
        let key = "";
        for (let j = 0; j < 26; j++) {
            key += '#' + arr[j];
        }
        if (map[key]) map[key].push(strs[i]);
        else map[key] = [strs[i]];
    }
    return Object.values(map);
};