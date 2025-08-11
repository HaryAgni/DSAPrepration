/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let r = num.length - 1;
    while (r >= 0) {
        if (Number(num[r]) % 2 == 0) r--;
        else return num.substring(0, r + 1);
    }
    return "";
};