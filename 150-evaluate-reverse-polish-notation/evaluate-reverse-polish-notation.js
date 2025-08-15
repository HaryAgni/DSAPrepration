/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let map = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => Math.trunc(a / b),
        '*': (a, b) => a * b
    }
    let s = [];
    for (let i = 0; i < tokens.length; i++) {
        if (!map[tokens[i]]) s.push(Number(tokens[i]));
        else {
            let a = s.pop();
            let b = s.pop();
            s.push(map[tokens[i]](b, a));
        }
    }
    return s.pop();

};