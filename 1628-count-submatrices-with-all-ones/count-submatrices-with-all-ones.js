/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
    let m = mat.length, n = mat[0].length;
    let heights = Array(n).fill(0);
    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) heights[j] = 0;
            else heights[j] += 1;
        }
        let stack = [];
        let sum = Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[j]) {
                stack.pop();
            }

            if (stack.length > 0) {
                let prevIndex = stack[stack.length - 1];
                sum[j] = sum[prevIndex] + heights[j] * (j - prevIndex);
            } else {
                sum[j] = heights[j] * (j + 1);
            }

            result += sum[j];
            stack.push(j);
        }
    }

    return result;
};