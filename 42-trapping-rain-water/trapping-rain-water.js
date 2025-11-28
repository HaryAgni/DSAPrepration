/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let l = 0;
    let r = height.length - 1;
    let ans = 0;
    let leftMax = height[0];
    let rightMax = height[height.length - 1];
    while (l < r) {
        if (leftMax < rightMax) {
            l++;
            leftMax = Math.max(height[l], leftMax);
            ans += leftMax - height[l];
        }
        else {
            r--;
            rightMax = Math.max(height[r], rightMax);
            ans += rightMax - height[r];
        }
    }
    return ans;
};