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
    if (!head || !head.next) return head;
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }
    k = k % size;
    if (k == 0) return head;
    let fast = head;
    let slow = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    let temp = slow.next;
    slow.next = null;
    fast.next = head;
    return temp;

};