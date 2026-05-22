/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let set = new Set(word);
        if (set.has(x)) ans.push(i);
    }
    return ans;
};