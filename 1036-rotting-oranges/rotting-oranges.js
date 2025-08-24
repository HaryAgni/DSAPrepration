/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let n = grid.length - 1;
    let m = grid[0].length - 1;
    let q = [];
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (grid[i][j] == 2) q.push([i, j, 0]);
        }
    }

    let minutes = 0;
    while (q.length) {
        let [x, y, currMinute] = q.shift();
        if (x > 0 && grid[x - 1][y] == 1) {
            grid[x - 1][y] = 2;
            q.push([x - 1, y, currMinute + 1]);
        }
        if (x < n && grid[x + 1][y] == 1) {
            grid[x + 1][y] = 2;
            q.push([x + 1, y, currMinute + 1]);
        }
        if (y > 0 && grid[x][y - 1] == 1) {
            grid[x][y - 1] = 2;
            q.push([x, y - 1, currMinute + 1]);
        }
        if (y < m && grid[x][y + 1] == 1) {
            grid[x][y + 1] = 2;
            q.push([x, y + 1, currMinute + 1]);
        }
        minutes = currMinute;
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (grid[i][j] == 1) return -1;
        }
    }
    return minutes;
};