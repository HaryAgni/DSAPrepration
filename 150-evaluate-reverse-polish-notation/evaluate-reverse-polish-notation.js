/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let map = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(b / a),
    }
    for (let i = 0; i < tokens.length; i++) {
        if (map[tokens[i]]) {
            let a = stack.pop();
            let b = stack.pop();
            let ans = map[tokens[i]](a, b);
            stack.push(ans);
        } else stack.push(Number(tokens[i]));
    }
    return stack.pop();
};