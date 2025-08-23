/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => Math.trunc(a / b),
        '*': (a, b) => a * b
    }
    let stack = [];
    let res = 0;
    for (let i = 0; i < tokens.length; i++) {
        if (!operations[tokens[i]]) stack.push(Number(tokens[i]));
        else {
            let b = stack.pop();
            let a = stack.pop();
            res = operations[tokens[i]](a, b);
            stack.push(res);
        }
    }
    return stack.pop();


};