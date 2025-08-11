/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let prevStr = "";
    let currStr = "";
    for (let i = 0; i < num.length; i++) {
        if (currStr !== "" && num[i] == currStr[0]) {
            currStr += num[i];
        }
        else {
            currStr = num[i];
        }
        if (currStr.length == 3) {
            prevStr = Number(prevStr) > Number(currStr) ? prevStr : currStr;
            currStr = "";
        }
    }
    return prevStr;
};