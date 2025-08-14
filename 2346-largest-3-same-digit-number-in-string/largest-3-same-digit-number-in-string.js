/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let prevStr = "";
    let res = "";
    for (let i = 0; i < num.length; i++) {
        if (prevStr && prevStr[0] == num[i]) {
            prevStr += num[i];
        }
        else {
            prevStr = num[i];
        }
        console.log(prevStr)
        if (prevStr.length == 3) {
            res = Number(res) > Number(prevStr) ? res : prevStr;
        }
    }
    return res;
};