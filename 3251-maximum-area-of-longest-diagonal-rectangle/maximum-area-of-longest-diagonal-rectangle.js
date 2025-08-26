/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let maxArea = 0;
    let maxDiag = 0;
    for (let i = 0; i < dimensions.length; i++) {
        let [l, w] = dimensions[i];
        let diag = Math.sqrt(l * l + w * w);
        if (diag > maxDiag || (diag === maxDiag && l * w > maxArea)) {
            maxDiag = diag;
            maxArea = l * w;
        }
    }
    return maxArea;
};