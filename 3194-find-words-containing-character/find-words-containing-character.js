/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        let set = new Set(words[i]);
        if (set.has(x)) ans.push(i);
    }
    return ans;
};