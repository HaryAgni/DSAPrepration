/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let maxL = [height[0]];
    let maxR = [];
    maxR[n - 1] = height[n - 1];
    
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], height[i]);
        maxR[n - 1 - i] = Math.max(height[n - 1 - i], maxR[n - i]);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + (Math.min(maxL[i], maxR[i]) - height[i]);
    }

    return ans;
};