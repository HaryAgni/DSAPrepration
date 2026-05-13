/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    else if(x==0) return true;
    let reverse ="";
    let temp =x;
    while(temp>0){
        reverse += temp%10;
        temp = Math.floor(temp/10);
    }

    if(reverse ==x)return true;
    else return false;
};