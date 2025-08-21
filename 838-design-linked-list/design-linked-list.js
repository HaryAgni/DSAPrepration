var ListNode = function (val) {
    this.val = val;
    this.next = null;
}
var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = new ListNode(val);
    if (!this.head) {
        this.head = node;
        this.size++;
        return;
    }
    let curr = this.head;
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = node;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size || index < 0) return;
    else if (index == 0) {
        this.addAtHead(val);
    }
    else if (index == this.size) {
        this.addAtTail(val);
    }
    else {
        let node = this.head;
        for (i = 0; i < index - 1; i++) {
            node = node.next;
        }
        let newNode = new ListNode(val);
        let temp = node.next;
        node.next = newNode;
        newNode.next = temp;
        this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    let node = this.head;
    if (index == 0) {
        let temp = node.next;
        node.next = null;
        this.head = temp;
    }
    else {
        for (let i = 0; i < index - 1; i++) {
            node = node.next;
        }
        let temp = node.next;
        node.next = node.next.next;
        temp.next = null;
    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */