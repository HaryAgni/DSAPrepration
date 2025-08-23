/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
    let res = Array(arr.length).fill(0);
    let stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[top] > arr[i]) {
                res[i] = top - i;
                break;
            }
            stack.pop();
        }
        stack.push(i);
    }
    return res;
};