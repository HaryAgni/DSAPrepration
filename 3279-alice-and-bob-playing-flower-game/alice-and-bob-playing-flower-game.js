/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function (n, m) {
    
    let oddN = Math.floor((n + 1) / 2);
    let evenN = Math.floor(n / 2);
    let oddM = Math.floor((m + 1) / 2);
    let evenM = Math.floor(m / 2);
    return oddN * evenM + evenN * oddM;
};