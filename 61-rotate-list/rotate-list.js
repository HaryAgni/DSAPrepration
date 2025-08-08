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
    let curr = head;
    let size = 0;
    while (curr) {
        size++;
        curr = curr.next;
    }
    k = k % size;
    let fast = head;
    let slow = head;
    for (i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = head;
    let newHead = slow.next;
    slow.next = null;
    return newHead;
};

