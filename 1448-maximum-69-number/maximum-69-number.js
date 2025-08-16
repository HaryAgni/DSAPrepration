/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let arr = (num + "").split('');
    let index = 0;
    while (index < arr.length) {
        if (arr[index] == '6') break;
        index++;
    }
    if (index !== arr.length) {
        arr[index] = '9';
        return Number(arr.join(''));
    }
    return num;
};