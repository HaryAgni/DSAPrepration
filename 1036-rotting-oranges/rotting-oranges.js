/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let q = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) q.push([i, j, 0]);
        }
    }
    let ans = 0;
    while (q.length) {
        let [i, j, min] = q.shift();
        if (i > 0 && grid[i - 1][j] == 1) {
            grid[i - 1][j] = 2;
            q.push([i - 1, j, min + 1]);
        }
        if (i < m - 1 && grid[i + 1][j] == 1) {
            grid[i + 1][j] = 2;
            q.push([i + 1, j, min + 1]);
        }
        if (j > 0 && grid[i][j - 1] == 1) {
            grid[i][j - 1] = 2;
            q.push([i, j - 1, min + 1]);
        }
        if (j < n - 1 && grid[i][j + 1] == 1) {
            grid[i][j + 1] = 2;
            q.push([i, j + 1, min + 1]);
        }
        ans = Math.max(ans, min);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) return -1;
        }
    }
    return ans;
};