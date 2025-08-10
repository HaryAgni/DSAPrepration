/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let str = words.toString();
    let currIndex = -1;
    let res = [];
    let j = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == x && currIndex == -1) {
            currIndex = j;
            res.push(currIndex);
        }
        else if (str[i] == ',') {
            j++;
            currIndex = -1;
        }
    }
    return res;
};