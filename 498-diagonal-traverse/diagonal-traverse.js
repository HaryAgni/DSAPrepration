/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
     let m = mat.length, n = mat[0].length;
    let res = [], row = 0, col = 0, dir = 1;
    for (let i = 0; i < m * n; i++) {
        res.push(mat[row][col]);
        if (dir === 1) {
            if (col === n - 1) { row++; dir = -1; }
            else if (row === 0) { col++; dir = -1; }
            else { row--; col++; }
        }
        else {
            if (row === m - 1) { col++; dir = 1; }
            else if (col === 0) { row++; dir = 1; }
            else { row++; col--; }
        }
    }
    return res;
};