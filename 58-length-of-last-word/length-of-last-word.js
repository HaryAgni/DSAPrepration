/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let endIndex = s.length - 1;
    let startIndex = 0;
    for (i = s.length - 1; i > 0; i--) {
        if (s[i] == " " && s[i - 1] !== " ") {
            endIndex = i - 1;
        } if (s[i] !== " " && s[i - 1] == " ") {
            startIndex = i;
            break;
        }
    }
    return endIndex - startIndex + 1;
    // let wordIndex = 0;
    // for (i = 0; i < s.length - 1; i++) {
    //     if (s[i] == " " && s[i + 1] !== " ") {
    //         wordIndex = i + 1;
    //     }
    // }
    // let length = 0;
    // let newStr = s.slice(wordIndex);
    // for (i = 0; i < newStr.length && newStr[i] !== " "; i++) {
    //     length++;
    // }
    // return length;

};