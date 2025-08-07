/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n < 1) return false;
    if (n == 1) return true;
    n = n / 2;
    return isPowerOfTwo(n);

};