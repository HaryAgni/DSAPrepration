
var MinStack = function () {
    this.s = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    let min = this.s.length ? Math.min(this.s[this.s.length - 1][1], val) : val;
    this.s.push([val, min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.s.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.s[this.s.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.s[this.s.length - 1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */