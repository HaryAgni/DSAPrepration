/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temps) {
    let stack = [];
    let res = Array(temps.length).fill(0);
    for (let i = temps.length - 1; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (temps[top] > temps[i]) {
                res[i] = top - i;
                break;
            }
            stack.pop();
        }
        stack.push(i);
    }

    return res;
};