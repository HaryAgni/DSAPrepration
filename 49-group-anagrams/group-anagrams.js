/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let freq = Array(26).fill(0);
        for (let j = 0; j < word.length; j++) {
            let index = word[j].charCodeAt() - 'a'.charCodeAt();
            freq[index] = ++freq[index];
        }
        let key = "";
        for (let i = 0; i < 26; i++) {
            key += '#' + freq[i];
        }
        if (!map[key]) map[key] = [word];
        else map[key].push(word);
    }
    return Object.values(map);
};