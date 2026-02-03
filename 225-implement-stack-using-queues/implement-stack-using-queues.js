
var MyStack = function () {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let q2 = [];
    while (this.q.length > 1) {
        q2.push(this.q.shift())
    }
    let ele = this.q.shift();
    while (q2.length) this.q.push(q2.shift());
    return ele;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let q2 = [];
    while (this.q.length > 1) {
        q2.push(this.q.shift())
    }
    let ele = this.q.shift();
    while (q2.length) this.q.push(q2.shift());
    this.q.push(ele);
    return ele;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */