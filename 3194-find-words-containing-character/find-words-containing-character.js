/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        let str = words[i];
        for (let j = 0; j < str.length; j++) {
            if (str[j] == x) {
                res.push(i)
                break;
            }
        }
    }
    return res;

};