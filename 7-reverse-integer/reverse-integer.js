/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let temp = Math.abs(x);
    let reverse = "";
     while(temp>0){
        reverse += temp%10;
        temp = Math.floor(temp/10);
    }
    reverse = Number(reverse);
    let limit = Math.pow(2, 31);
    if (reverse < -limit || reverse > (limit - 1)) return 0;
    return x < 0 ? -reverse : reverse;
};