/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temps) {
    let stack = [];
    let res = [];
    for (let i = temps.length - 1; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (temps[top] > temps[i]) {
                res.push(top - i);
                break;
            }
            stack.pop();
        }
        if (!stack.length) res.push(0);
        stack.push(i);
    }

    return res.reverse();
};