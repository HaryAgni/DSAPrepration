/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    let count = 0;
    const n = points.length;

    for (let i = 0; i < n; i++) {
        let maxY = -Infinity;
        for (let j = i + 1; j < n; j++) {
            if (points[j][1] <= points[i][1]) {
                if (points[j][1] > maxY) {
                    count++;
                    maxY = points[j][1];
                }
            }
        }
    }

    return count;
};