/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (i in jewels) {
        for (j in stones) {
            if (jewels[i] == stones[j]) {
                count++;
            }
        }
    }
    return count;
};