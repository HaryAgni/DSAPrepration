/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || k == 0) return head;
    let tail = head;
    let size = 1;
    while (tail.next) {
        size++;
        tail = tail.next;
    }
    k = k % size;
    let stepsToNewTail = size - k - 1;
    let newTail = head;
    for (i = 0; i < stepsToNewTail; i++) {
        newTail = newTail.next;
    }
    tail.next = head;
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
};

