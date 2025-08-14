
var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let n = this.s1.length;
    for (let i = 0; i < n - 1; i++) {
        this.s2.push(this.s1.pop());
    }
    let res = this.s1.pop();
    n = this.s2.length;
    for (let i = 0; i < n; i++) {
        this.s1.push(this.s2.pop());
    }
    return res;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let n = this.s1.length;
    for (let i = 0; i < n - 1; i++) {
        this.s2.push(this.s1.pop());
    }
    let res = this.s1.pop();
    this.s1.push(res);
    n = this.s2.length;
    for (let i = 0; i < n; i++) {
        this.s1.push(this.s2.pop());
    }
    return res;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */