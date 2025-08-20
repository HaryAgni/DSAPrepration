/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 1) return true;
    if (n % 2 == 1 || n < 1) return false;
    return isPowerOfTwo(Math.floor(n / 2));
};