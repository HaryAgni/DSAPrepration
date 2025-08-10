/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    let jSet = new Set(jewels);
    for (i = 0; i < stones.length; i++) {
        if (jSet.has(stones[i])) count++;
    }
    return count;
};