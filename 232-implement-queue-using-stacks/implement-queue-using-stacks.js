
var MyQueue = function () {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let s = [];
    for (let i = this.stack.length - 1; i > 0; i--) {
        s.push(this.stack.pop());
    }
    let ele = this.stack.pop();
    while (s.length) this.stack.push(s.pop());
    return ele;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let s = [];
    for (let i = this.stack.length - 1; i >= 0; i--) {
        s.push(this.stack.pop());
    }
    let ele = s[s.length - 1];
    while (s.length) this.stack.push(s.pop());
    return ele;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */