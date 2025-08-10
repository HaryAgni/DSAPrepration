/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let sum = 0;
    let obj = {};
    for (i = 0; i < stones.length; i++) {
        if (obj[stones[i]]) {
            obj[stones[i]]++;
        }
        else { obj[stones[i]] = 1; }
    }
    console.log(obj);
    for (i = 0; i < jewels.length; i++) {
        sum = sum + (obj[jewels[i]] || 0);
    }
    return sum;
};