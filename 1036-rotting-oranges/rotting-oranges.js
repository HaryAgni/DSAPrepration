/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let n = grid.length;
    let m = grid[0].length;
    let q = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 2) q.push([i, j, 0]);
        }
    }
    let minutes = 0;
    while (q.length) {
        let [x, y, min] = q.shift();
        if (x - 1 >= 0 && grid[x - 1][y] == 1) {
            grid[x - 1][y] = 2;
            q.push([x - 1, y, min + 1]);
        }
        if (x + 1 < n && grid[x + 1][y] == 1) {
            grid[x + 1][y] = 2;
            q.push([x + 1, y, min + 1]);
        }
        if (y - 1 >= 0 && grid[x][y - 1] == 1) {
            grid[x][y - 1] = 2;
            q.push([x, y - 1, min + 1]);
        }
        if (y + 1 < m && grid[x][y + 1] == 1) {
            grid[x][y + 1] = 2;
            q.push([x, y + 1, min + 1]);
        }
        minutes = min;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) return -1;
        }
    }
    return minutes;
};