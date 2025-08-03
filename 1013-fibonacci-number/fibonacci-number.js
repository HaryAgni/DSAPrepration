/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    n--;

    return fib(n) + fib(n - 1);
};