/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let count = 0;
    const n = points.length;
    for (let i = 0; i < n; i++) {
        const alice = points[i];
        let maxY = -Infinity;
        for (let j = i + 1; j < n; j++) {
            const bob = points[j];
            if (bob[1] <= alice[1]) {
                if (bob[1] > maxY) {
                    count++;
                    maxY = bob[1];
                }
            }
        }
    }

    return count;
};